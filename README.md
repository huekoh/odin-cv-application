# CV Generator

A single-page resume builder built with React. Fill in your details and download a formatted PDF resume.

![React](https://img.shields.io/badge/React-19-blue) ![react-pdf](https://img.shields.io/badge/@react--pdf%2Frenderer-4.3-red)

## Features

- Edit personal info, education, work experience, projects, and skills
- Live PDF preview that updates as you add and submit new entries
- Add, edit, and delete entries for each section
- Download the finished resume as a PDF

## Tech Stack

- **React** — UI and state management
- **@react-pdf/renderer** — PDF generation and live preview

## Getting Started

```bash
git clone https://github.com/your-username/cv-generator.git
cd cv-generator
npm install
npm run dev
```

## Usage

Fill in your details using the form on the left. The PDF preview on the right updates as you add and submit entries. Once done, click the download button in the preview to save your resume.

## Project Structure

```
src/
├── components/
│   ├── form-section/     # Input forms for each resume section
│   └── pdf-section/      # PDF layout and rendering
├── styles/
├── App.jsx
└── main.jsx
              # Root component, holds all state
```

## Motivation

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practise React fundamentals — component architecture, state management, and controlled forms.
