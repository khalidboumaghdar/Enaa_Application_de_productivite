# BeFocused APP - Application de Productivité

## Contexte

La gestion du temps et des tâches est un défi pour beaucoup, que ce soit dans un cadre professionnel ou personnel. Les méthodes modernes de productivité, comme la technique Pomodoro, sont devenues populaires pour structurer le travail en sessions chronométrées et maintenir un bon équilibre entre concentration et pauses. Cette application combine une **To-Do List** (liste de tâches) et un **minuteur Pomodoro** pour aider les utilisateurs à organiser leurs tâches et à améliorer leur concentration.

---

## Objectifs

**BeFocused APP** est une application de productivité permettant aux utilisateurs de :

- Gérer leurs tâches et suivre leur progression.
- Utiliser un minuteur Pomodoro pour structurer leur travail en sessions de 25 minutes, avec des pauses courtes ou longues.
- Filtrer les tâches par priorité (basse, moyenne, haute) et par statut (terminée ou en cours).
- Configurer et ajuster la durée des sessions de travail et des pauses.

---

## User Stories

### En tant qu'utilisateur, je peux :

- **Créer et gérer mes tâches** :
  - Ajouter une tâche avec :
    - Titre (obligatoire).
    - Description (optionnelle).
    - Priorité (basse, moyenne, haute via un select).
  - Marquer une tâche comme terminée.
  - Modifier ou supprimer une tâche existante.
  
- **Utiliser un minuteur Pomodoro** :
  - Lancer un cycle de travail Pomodoro (25 minutes de travail par défaut).
  - Configurer les durées des sessions de travail et des pauses (courtes - 5 minutes, longues - 15 minutes).
  - Suivre le nombre de cycles complétés pour une tâche.

- **Filtrer les tâches** :
  - Filtrer par priorité ou statut (terminée ou en cours).

- **Voir le nombre de tâches terminées** et consulter le nombre de cycles Pomodoro complétés par jour ou par semaine.

---

## Technologies utilisées

- **HTML5** : Structure de la page.
- **CSS3** / **Bootstrap** : Stylisation de l'interface utilisateur (responsive design).
- **JavaScript** :
  - Manipulation du DOM pour gérer l'ajout, la modification et la suppression des tâches.
  - Gestion des événements (clic, soumission, minuteur).
  - Validation des champs.

---

## Fonctionnalités

### 1. **Gestion des tâches**
- Ajouter, modifier, supprimer des tâches.
- Marquer une tâche comme terminée.
- Ajouter une priorité (basse, moyenne, haute).
- Description optionnelle pour chaque tâche.

### 2. **Minuteur Pomodoro**
- Lance un minuteur Pomodoro avec une session de 25 minutes de travail.
- Configuration des durées des sessions de travail et des pauses (courtes ou longues).
- Suivi des cycles Pomodoro complétés par tâche.

### 3. **Filtrage des tâches**
- Filtrer les tâches par priorité (basse, moyenne, haute).
- Filtrer les tâches par statut (terminée ou en cours).

### 4. **Notifications**
- Alerte sonore et visuelle lorsque le cycle Pomodoro est terminé.

---

## Installation

### Prérequis
- **Navigateur moderne** (Google Chrome, Firefox, etc.).
- **Code Editor** (Visual Studio Code, Sublime Text, etc.).

### Clonez ce repository :

```bash
git clone https://github.com/votre-username/BeFocused-APP.git
