import pkg from "../../package.json";
import updateNotifier from "simple-update-notifier";

export const checkForUpdates = async () => {
  if (pkg.version === "0.0.0-development") return;

  return updateNotifier({
    pkg,
    shouldNotifyInNpmScript: true, // Make notification work when using with NPX
    updateCheckInterval: 1000 * 60 * 60 * 12, // 12 hours
  });
};
