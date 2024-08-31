# Membrane Frontend Monorepo with Nx and Module Federation

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Generate Nx Workspace with Module Federation

Learn more about [Tutorial](https://nx.dev/concepts/module-federation/faster-builds-with-module-federation).

- Run `npx create-nx-workspace@latest membrane-mfe` to create a new Nx workspace.
  ✔ Which stack do you want to use? · none
  ✔ Package-based monorepo, integrated monorepo, or standalone project? · integrated
  ✔ Set up CI with caching, distribution and test deflaking · skip
  ✔ Would you like remote caching to make your build faster? · yes

- Run `nx add @nx/react` to add React support to your workspace.
  ✔ Installing @nx/react@18.3.4...
  ✔ Initializing @nx/react...

- Run `nx g @nx/react:host host --directory=apps/host --remotes=dashboard,loans,wallets` to generate a host application. You can use the `--directory` flag to specify.
  ✔ Which stylesheet format would you like to use? · css
  ✔ Which E2E test runner would you like to use? · none
  ✔ What should be the project name and where should it be generated? · as provider
  ✔ Which remotes would you like to use? · dashboard, accounts, wallets

### Generate Host and Remote Applications

- Run `nx g @nx/react:host host --directory=apps/host` to generate a host application. You can use the `--directory` flag to specify.
  ✔ Which stylesheet format would you like to use? · css
  ✔ Which E2E test runner would you like to use? · none
  ✔ What should be the project name and where should it be generated? · as provider

- Run `nx g @nx/react:remote app-name --host=host --directory=apps/remotes/app-name` to generate a remote application. You can use the `--directory` flag to specify.
  ✔ Which stylesheet format would you like to use? · css
  ✔ Which E2E test runner would you like to use? · none
  ✔ What should be the project name and where should it be generated? · as provider

### Add Remote Applications to the project

1. Run `nx g @nx/react:remote app-name --host=host --directory=apps/remotes/app-name` to generate a remote application. You can use the `--directory` flag to specify.
   ✔ Which stylesheet format would you like to use? · css
   ✔ Which E2E test runner would you like to use? · none
   ✔ What should be the project name and where should it be generated? · as provider

- nx g @nx/react:remote dashboard --host=host --directory=apps/remotes/dashboard
- nx g @nx/react:remote loans --host=host --directory=apps/remotes/loans
- nx g @nx/react:remote trades --host=host --directory=apps/remotes/trades
- nx g @nx/react:remote derivatives --host=host --directory=apps/remotes/derivatives
- nx g @nx/react:remote collateral --host=host --directory=apps/remotes/collateral
- nx g @nx/react:remote settlements --host=host --directory=apps/remotes/settlements
- nx g @nx/react:remote counterparties --host=host --directory=apps/remotes/- counterparties
- nx g @nx/react:remote settings --host=host --directory=apps/remotes/settings
- nx g @nx/react:remote session --host=host --directory=apps/remotes/session

2. Run `npx nx run-many --target=build --all` to build all applications.

3. Run `npx nx serve host --open` to serve all applications.

4. If you want to serve a remote application, run `npx nx run app-name:serve --open`.

### Add libraries to the project

1. Run `nx g @nx/react:library ui --directory=libs/ui` to generate a library. You can use the `--directory` flag to specify.
   ✔ What unit test runner should be used? · jest
   ✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup · none
   ✔ What should be the project name and where should it be generated? · as provider

### Add Remote Storybook to the project

1. Run `nx g @nx/react:remote ui-name --host=host --directory=apps/shared/ui-name` to generate a remote application. You can use the `--directory` flag to specify.
   ✔ Which stylesheet format would you like to use? · css
   ✔ Which E2E test runner would you like to use? · none
   ✔ What should be the project name and where should it be generated? · as provider

2. Run `nx g @nx/react:storybook-configuration ui-name` to setup ui project with Storybook.

3. Run `npx nx add @nx/storybook` to add Storybook support to your workspace.

4. Run `nx storybook ui-name -p 6006 -s public` to serve Storybook.

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Understand the workspace

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨
