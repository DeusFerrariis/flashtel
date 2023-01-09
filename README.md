# Flashtel

Flashtel is a quizlet clone as a challenge/practice project. Flashtel is 
designed to use gunDB to sync changes to flashcards across devices. While not a
full-proof method to persist the flashcards it allows for a free public version at
little to no cost for end users.

## Tech Stack
- Svelte/SvelteKit
  - TypeScript
- GunDB

## Future Goals / Current Milestones
- Initial MVP
- Unit Tested & Visually Tested Version
- CI/CD Integrated Repository
- Paid Persistence Options
- Alternative Methods for Using Flashcard Data
  - Alternative Study Modes
  - Exported Flashcard Data
  - Alternative Decentralized Persistence (FileCoin Snapshots or IPFS Pinning)

## Running Locally / Installing

> ### INFO
> 
> Until an MVP is availible installation options are limited to running the project
> preview. Feel free to submit a PR for a run/install script if you have one.

### Linux/Mac

#### Requirements
- Equivalent Node Version
- Yarn / npm

- 1. Clone this repository locally
- 2. Install project dependencies

```sh
yarn
# or if using npm
npm install
````

- 3. Run project in browser

```sh
yarn preview
# or if using npm
npm run preview
```
