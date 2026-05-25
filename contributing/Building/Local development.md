# Local development

First follow [[Setting up build environment]].

## Quick start

Whenever you get the latest code or change `package.json`, sync dependencies first:

```bash
yarn
```

Then build and deploy to the Tasks Demo vault (`resources/sample_vaults/Tasks-Demo/`):

```bash
yarn build:dev && yarn deploy:local
```

On Windows, run the two commands separately:

```bash
yarn build:dev
yarn deploy:local
```

> [!Tip]
> `deploy:local` copies all three plugin files (`main.js`, `manifest.json`, `styles.css`).
>
> Because the Hot Reload plugin is installed and configured in that vault, the Tasks plugin will reload automatically after each deploy.
>
> If testing callbacks in Tasks rendering code, use the **Reload app without saving** command instead, for safety.

Set env `OBSIDIAN_PLUGIN_ROOT` to the path of the `.obsidian/plugins` folder in your local test vault.
In Windows PowerShell:

```powershell
$env:OBSIDIAN_PLUGIN_ROOT = "C:\Users..."
```

- **Either** manually copy the `main.js` file to local test vault's `.obsidian/plugins/obsidian-tasks` folder,
  - There is also a script `scripts/Test-TasksInLocalObsidian.sh` which copies in all 3 of the plugin's files.
  - With both of these approaches, you must remember to repeat the copy step after every build.
- **Or** use the Powershell script that is run via the `yarn deploy:local` command to create a symbolic link to the plugins folder for this plugin (`obsidian-tasks-plugin`).
  - With the symbolic link, whenever a build occurs using `yarn run dev` or `yarn run build:dev` the plugin will be updated in the obsidian vault you are targeting using the `OBSIDIAN_PLUGIN_ROOT` environment variable.
  - However, the symbolic link option does not work if syncing your test vault to other devices.

> [!Warning]
> Please do not commit local plugin builds. We only commit released plugin versions. Thank you.

## Deploying to a different vault

Pass your vault path as an argument:

```bash
yarn deploy:local /path/to/your/vault
```

Make sure [Hot Reload](https://github.com/pjeby/hot-reload) is set up for the Tasks plugin in that vault.

## Watching for changes

To rebuild automatically on every file save (useful for catching compile errors during development):

```bash
yarn dev
```

Note that `yarn dev` does not deploy to a vault — use `build:dev` + `deploy:local` when you want to test in Obsidian.

PowerShell users can use `yarn deploy:local:pwsh` instead, which creates symbolic links rather than copying.
