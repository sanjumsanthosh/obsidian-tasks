
export OBSIDIAN_PLUGIN_ROOT="/Users/smsantho/Oracle Content/Notes/.obsidian/plugins"

yarn
yarn run build

# cp main.js manifest.json styles.css resources/sample_vaults/Tasks-Demo/.obsidian/plugins/obsidian-tasks-plugin

echo "Copying to $OBSIDIAN_PLUGIN_ROOT/obsidian-tasks-plugin ... "

cp main.js manifest.json styles.css "$OBSIDIAN_PLUGIN_ROOT/obsidian-tasks-plugin"

echo "Done."