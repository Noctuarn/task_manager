const tasks: Task[] = [
  {
    _id: 1,
    title: "Complete Project",
    description: "Finish the task manager project using Next.js.",
    tags: "nextjs, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 11, title: "Set up project structure", isComplete: true },
      { _id: 12, title: "Implement task components", isComplete: false },
      { _id: 13, title: "Style the application", isComplete: false },
    ],
  },
  {
    _id: 2,
    title: "Write Documentation",
    description: "Document the code and provide a user guide.",
    tags: "documentation, guide, code",
    isComplete: false,
    subtasks: [
      { _id: 21, title: "Outline documentation structure", isComplete: true },
      { _id: 22, title: "Write code comments", isComplete: false },
      { _id: 23, title: "Create user guide", isComplete: false },
    ],
  },
  {
    _id: 3,
    title: "Review Code",
    description: "Conduct a code review for the task manager project.",
    tags: "code review, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 31, title: "Check for code quality", isComplete: true },
      { _id: 32, title: "Address code review comments", isComplete: false },
    ],
  },
  {
    _id: 4,
    title: "Test Application",
    description: "Perform testing on the task manager application.",
    tags: "testing, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 41, title: "Write test cases", isComplete: true },
      { _id: 42, title: "Execute test scenarios", isComplete: false },
    ],
  },
  {
    _id: 5,
    title: "Deploy to Production",
    description: "Deploy the task manager project to a production environment.",
    tags: "deployment, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 51, title: "Configure production server", isComplete: true },
      { _id: 52, title: "Monitor deployment process", isComplete: false },
    ],
  },
  {
    _id: 6,
    title: "User Feedback",
    description: "Gather feedback from users on the task manager application.",
    tags: "feedback, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 61, title: "Create feedback form", isComplete: true },
      { _id: 62, title: "Analyze user responses", isComplete: false },
    ],
  },
  {
    _id: 7,
    title: "Bug Fixing",
    description: "Address and fix any reported bugs in the task manager.",
    tags: "bug fixing, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 71, title: "Receive bug reports", isComplete: true },
      { _id: 72, title: "Prioritize and fix bugs", isComplete: false },
    ],
  },
  {
    _id: 8,
    title: "Performance Optimization",
    description: "Optimize the performance of the task manager application.",
    tags: "optimization, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 81, title: "Identify performance bottlenecks", isComplete: true },
      { _id: 82, title: "Implement optimizations", isComplete: false },
    ],
  },
  {
    _id: 9,
    title: "Security Audit",
    description: "Conduct a security audit for the task manager project.",
    tags: "security audit, task manager, project",
    isComplete: false,
    subtasks: [
      { _id: 91, title: "Review security measures", isComplete: true },
      {
        _id: 92,
        title: "Implement security recommendations",
        isComplete: false,
      },
    ],
  },
  {
    _id: 10,
    title: "Documentation Update",
    description:
      "Update documentation based on project changes and improvements.",
    tags: "documentation, update, project",
    isComplete: false,
    subtasks: [
      {
        _id: 101,
        title: "Review and update existing documentation",
        isComplete: true,
      },
      { _id: 102, title: "Add new sections as needed", isComplete: false },
    ],
  },
];

export default tasks;
