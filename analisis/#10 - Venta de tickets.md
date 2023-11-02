# Venta de tickets

**Nota: Todo texto en *cursiva* se refiere a una posible discusión a tener.**
## Pasos
- Reserva de ticket
- Compra de ticket

### Reserva de tickets
Cuando el `Customer` quiere comprar un ticket, se le genera una reserva, esto sirve para evitar que puedan surgir problemas de concurrencia.
La idea es que esta reserva tenga un `Customer` asociado, un `Event` y un timeout, configurable de unos 10 o 15 minutos.
Esta reserva tiene que descontar del `TicketType` la cantidad de tickets comprados y ese descuento tiene que ser [tolerante a concurrencia](https://docs.djangoproject.com/en/4.2/ref/models/expressions/#avoiding-race-conditions-using-f).
Si el descuento no se puede hacer, se considera que la reserva no puede hacerse y se informa al `Customer` que no se puede continuar con la compra.

En caso de éxito se asignará el timeout y el `Customer` puede hacer la compra. El timeout es necesario para evitar que todos los tickets queden reservados sin una compra efectiva.

### Compra de ticket
Al momento de comprar, el `Customer` debera ingresar los datos de pago y se ejecutará el proceso de compra contra la plataforma de pago. En caso de éxito, el ticket se considerará vendido y se descontará del número de entradas disponibles. A su vez, la reserva se considerará completa. En caso de error en el pago se *liberará la reserva* y se informará al usuario.

En caso de éxito pero con reserva vencida, *se devolverá el dinero al `Customer`*.

## Liberación de reservas
Cada *un minuto* se liberarán las reservas alcanzadas por el timeout, permitiendo así que se reutilicen los tickets que quedaron reservados y nunca comprados. Toda reserva liberada debe marcarse como `stale`.

## Modelos
```python
TicketReservation
  event = fk(Event)
  customer = fk(Customer)
  timeout = datetime
  status = (active|stale|completed)
```

```python
Ticket
  event = fk(Event)
  customer = fk(Customer)
  reservation = fk(TicketReservation)
```
