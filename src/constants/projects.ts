import expenseTracker from "../assets/projects/expense-tracker.png";
import planutri from "../assets/projects/planutri.gif";
import nissu from "../assets/projects/nissu.gif";
import wellpulse from "../assets/projects/wellpulse.gif";
import onboarding from "../assets/projects/onboarding.gif";
import budgets from "../assets/projects/budgets.gif";

export const projects = [
    {
        id: 1,
        name: "Nissu",
        src: nissu.src,
        link: "https://nissu.app/",
        description: "Nissu is a fun and motivating habit streak tracker built with React Native and Expo. Complete daily habits, maintain your streaks, and help a little cat named Nissu build a tall cozy home for each habit – one floor at a time."
    },
    {
        id: 2,
        name: "Planutri",
        src: planutri.src,
        link: "https://planutri.vercel.app/",
        description: "Applicacion designed to plan your weekly menu and generate a shopping list. It features a meal planner, shopping list, a form to create a public or private recipe and a recipes list with all the recipes."
    },
    {
        id: 3,
        name: "Wellpulse",
        src: wellpulse.src,
        link: "https://wellpulse.vercel.app/",
        description: "Application designed to track healthy habits. It features a calendar to manage habits, progress charts to visualize improvement, and an interactive map displaying locations where users can perform their habits."
    },
    {
        id: 4,
        name: "Budget Calculator",
        src: budgets.src,
        link: "https://web-budget-calculator.vercel.app/",
        description: "A budget calculation app built with React to estimate the costs of website development."
    },
    {
        id: 5,
        name: "Digital Onboarding",
        src: onboarding.src,
        link: "https://digital-onboarding.vercel.app/",
        description: "This is a digital onboarding application featuring several interactive cards that allow users to navigate forward and backward, with smooth animations to enhance user experience."
    },
    {
        id: 6,
        name: "Expense Tracker",
        src: expenseTracker.src,
        link: "https://expense-tracker-sable-two.vercel.app/",
        description: "This is a simple application to keep track of your expenses."
    },
]