# Ticketera Popular

## Backend con Django
- BBDD multitenant

### Instalación
- Activar venv
```bash
cd api
pip install -r requirements/development.txt
pre-commit install
docker-compose up -d # Corre la db en modo daemon
```

### Testing
#### Correr los tests
```bash
cd api/ticket_manager
pytest
```

#### Escribir un test
Usamos pytest y pytest-django para testear. Un ejemplo:
```python
import pytest


@pytest.mark.django_db # Permite el acceso a DB
def test_example():
    assert 1 == 1
```
#### Configuración
Los tests se configuran en el archivo `pytest.ini` donde se indica el archivo settings de django y el patrón para hacer discovery de los tests. Por el momento el archivo de configuración no es muy interesante pero es buena idea tenerlo separado.

### Modelo de datos

- `User`: personas que administran la venta de entradas en un `CultureSpace`. Ver 2FA
- `CultureSpace`: espacio cultural, teatro, sala, etc.
	- name:
	- type:
	- address:
	- email:
	- contact_user:
	- mp_account:
- `SocialNetwork`:
	- culture_space:
	- type: INSTAGRAM, FB, etc.
	- identifier
- `EventOcurrency`:
	- Name
	- Datetime
	- Description
	- Pictures...:
	- `CultureSpace`
	- tags: M2M `Tag`
- `Tag`
	- name
	- color
- `Ticket`
	- token
	- event_ocurrency
	- customer
- `Customer`
	- email
	- name
	- birthdate
	- interest:
	- allow_recomendations
- `CustomerTagCount`
	- tag
	- count
	- customer
	- last_increment
