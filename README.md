# employeeCRM

Employee CRM

🇷🇺 Описание

Employee CRM — учебный React + TypeScript проект для управления списком сотрудников.
Проект реализован с фокусом на правильную архитектуру компонентов, однонаправленный поток данных и иммутабельную работу с состоянием.

Используется как практическая база для изучения:

React (функциональные компоненты, hooks)

TypeScript

Controlled components

Lifting state up

Подготовки к тестированию и CI/CD

🚀 Функциональность

Добавление нового сотрудника

Удаление сотрудника

Повышение сотрудника (increase)

Отметка сотрудника на повышение (rise)

Управление состоянием на уровне App

Контролируемые формы

Иммутабельные обновления состояния

🧱 Архитектура

App — единый источник истины (state owner)

Дочерние компоненты получают данные и обработчики через props

Логика изменения данных централизована

Компоненты не мутируют состояние напрямую

App
├─ AppInfo
├─ AppSearchPanel
├─ AppFilter
├─ AppEmployeesList
│ └─ AppEmployeesListItem
└─ AppEmployeesAddForm

🛠️ Стек технологий

React

TypeScript

CSS

Vite (или CRA — в зависимости от сборки)

Git / GitHub

📦 Установка и запуск
git clone https://github.com/RodionovDevMode/employeeCRM.git
cd employeeCRM
npm install
npm run dev

🧠 Ключевые концепции, используемые в проекте

Controlled Inputs

Event-driven state updates

Props drilling

Immutability (map, filter)

Separation of concerns

Подготовка к масштабированию (Redux, API)

🔮 Планы по развитию

Сохранение данных (localStorage / backend)

Поиск и фильтрация

Покрытие компонентов тестами

CI/CD pipeline

Redux / Zustand

👨‍💻 Автор

RodionovDevMode
Учебный проект в рамках углублённого изучения Frontend-разработки.

Employee CRM
🇬🇧 Description

Employee CRM is an educational React + TypeScript project for managing a list of employees.
The project focuses on clean component architecture, one-way data flow, and immutable state management.

It is used as a practice ground for learning:

React (functional components, hooks)

TypeScript

Controlled components

Lifting state up

Preparation for testing and CI/CD

🚀 Features

Add new employee

Delete employee

Employee bonus toggle (increase)

Promotion flag (rise)

Centralized state management

Controlled forms

Immutable state updates

🧱 Architecture

App is the single source of truth

Child components receive data and callbacks via props

All state mutations are centralized

No direct state mutations in child components

App
├─ AppInfo
├─ AppSearchPanel
├─ AppFilter
├─ AppEmployeesList
│ └─ AppEmployeesListItem
└─ AppEmployeesAddForm

🛠️ Tech Stack

React

TypeScript

CSS

Vite (or CRA depending on setup)

Git / GitHub

📦 Installation & Run
git clone https://github.com/RodionovDevMode/employeeCRM.git
cd employeeCRM
npm install
npm run dev

🧠 Core Concepts Used

Controlled inputs

Event-driven state updates

Props drilling

Immutability (map, filter)

Separation of concerns

Scalable architecture foundation

🔮 Roadmap

Data persistence (localStorage / backend)

Search and filtering

Component test coverage

CI/CD pipeline

Redux / Zustand integration

👨‍💻 Author

RodionovDevMode
Educational project as part of deep frontend engineering practice.
