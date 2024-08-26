
export OBSIDIAN_PLUGIN_ROOT=$(grep -oP '(?<=OBSIDIAN_PLUGIN_ROOT=").*(?=")' .env)

yarn
yarn run build

# cp main.js manifest.json styles.css resources/sample_vaults/Tasks-Demo/.obsidian/plugins/obsidian-tasks-plugin

echo "Copying to $OBSIDIAN_PLUGIN_ROOT/obsidian-tasks-plugin ... "

cp main.js manifest.json styles.css "$OBSIDIAN_PLUGIN_ROOT/obsidian-tasks-plugin"

echo "Done."