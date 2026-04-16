import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const QUIZ_QUESTIONS = [
  {
    word: "Component",
    correct: "Reusable building block of UI",
    options: [
      "Reusable building block of UI",
      "A styling method",
      "A database",
      "A server function"
    ]
  },
  {
    word: "State",
    correct: "Data that changes and updates UI",
    options: [
      "Static HTML",
      "Data that changes and updates UI",
      "CSS styling",
      "API endpoint"
    ]
  },
  {
    word: "Props",
    correct: "Inputs passed to components",
    options: [
      "Internal data",
      "Inputs passed to components",
      "Database values",
      "Functions only"
    ]
  }
];
