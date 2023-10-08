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
