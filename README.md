# Zadanie 4 - System zarzadzania zadaniami domowymi

## Spis Treści

1. Opis projektu
2. Funkcjonalności
3. Technologie

## Opis projektu

Task Manager to aplikacja internetowa do zarządzania zadaniami. Umożliwia użytkownikom dodawanie, edytowanie, usuwanie i aktualizowanie statusu zadań. Aplikacja jest stworzona w architekturze MVC.

## Funkcjonalności

- Dodawanie zadań: Użytkownicy mogą dodawać nowe zadania z opisem i terminem.
- Edycja zadań: Użytkownicy mogą edytować istniejące zadania, zmieniając ich opis i termin.
- Usuwanie zadań: Użytkownicy mogą usuwać zadania.
- Aktualizacja statusu zadań: Użytkownicy mogą zmieniać status zadania na "In progress" lub "Completed".
- Wyświetlanie listy zadań: Użytkownicy mogą zobaczyć listę wszystkich zadań.
- Walidacja danych: Aplikacja sprawdza poprawność danych wprowadzanych przez użytkownika.

### Wymagania

- Node.js (wersja 12 lub nowsza)
- npm (wersja 6 lub nowsza)

### Instalacja

1. Sklonuj repozytorium:
    git clone https://github.com/vnebra4niy/ProjektMVC
    cd ProjektMVC

2. Zainstaluj zależności:
    npm install

### Uruchomienie

1. Uruchom serwer:
    npm start

2. Otwórz przeglądarkę i przejdź do adresu:
    http://localhost:3000/tasks/list

## Technologie

- Node.js: Środowisko wykonawcze JavaScript.
- Express.js: Framework webowy dla Node.js.
- EJS: Silnik szablonów do generowania HTML.
- CSS: Stosowany do stylizacji stron.
