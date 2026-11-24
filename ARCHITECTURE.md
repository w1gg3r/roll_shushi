# ARCHITECTURE

## Стартовая архитектура
Модульный монолит: один backend deployment и одна PostgreSQL database. Микросервисы не вводить без измеримой необходимости.

- `apps/web`: React SPA/PWA-ready клиент.
- `apps/api`: NestJS REST API.
- `packages/shared`: общие типы и контракты.
- PostgreSQL + Prisma.
- Render — целевая платформа размещения после локальной проверки.

## Доменные модули
health, catalog, customers, addresses, cart, orders, delivery, payments (адаптеры), auth, admin, audit.

## Инварианты
- Сервер — источник истины для цен, скидок, прав и статусов.
- Изменения заказов/оплаты — транзакционные и идемпотентные.
- Не хранить PAN/CVV.
- Время хранить в UTC; показывать в локальной зоне города.
- Модель учитывать несколько городов/точек производства.
- REST API с префиксом `/api/v1`.