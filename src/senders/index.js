import amplitude from '../amplitude';

export const requestOpenInBrowser = (url) => window.ipcRenderer.send('request-open-in-browser', url);
export const requestLoadUrl = (url, id) => window.ipcRenderer.send('request-load-url', url, id);
export const requestShowMessageBox = (message, type) => window.ipcRenderer.send('request-show-message-box', message, type);

export const requestGoHome = () => window.ipcRenderer.send('request-go-home');
export const requestGoBack = () => window.ipcRenderer.send('request-go-back');
export const requestGoForward = () => window.ipcRenderer.send('request-go-forward');
export const requestReload = () => window.ipcRenderer.send('request-reload');

export const requestQuit = () => window.ipcRenderer.send('request-quit');
export const requestCheckForUpdates = () => window.ipcRenderer.send('request-check-for-updates');

export const requestShowAboutWindow = () => window.ipcRenderer.send('request-show-about-window');
export const requestShowAddWorkspaceWindow = () => window.ipcRenderer.send('request-show-add-workspace-window');
export const requestShowEditWorkspaceWindow = (id) => window.ipcRenderer.send('request-show-edit-workspace-window', id);
export const requestShowNotificationsWindow = () => window.ipcRenderer.send('request-show-notifications-window');
export const requestShowPreferencesWindow = (scrollTo) => window.ipcRenderer.send('request-show-preferences-window', scrollTo);
export const requestShowWorkspacePreferencesWindow = (id) => window.ipcRenderer.send('request-show-workspace-preferences-window', id);

// Notifications
export const requestShowNotification = (opts) => window.ipcRenderer.send('request-show-notification', opts);
export const requestUpdatePauseNotificationsInfo = () => window.ipcRenderer.send('request-update-pause-notifications-info');
export const getPauseNotificationsInfo = () => window.ipcRenderer.sendSync('get-pause-notifications-info');

// Preferences
export const getPreference = (name) => window.ipcRenderer.sendSync('get-preference', name);
export const getPreferences = () => window.ipcRenderer.sendSync('get-preferences');
export const requestSetPreference = (name, value) => window.ipcRenderer.send('request-set-preference', name, value);
export const requestResetPreferences = () => window.ipcRenderer.send('request-reset-preferences');
export const requestShowRequireRestartDialog = () => window.ipcRenderer.send('request-show-require-restart-dialog');

// System Preferences
export const getSystemPreference = (name) => window.ipcRenderer.sendSync('get-system-preference', name);
export const getSystemPreferences = () => window.ipcRenderer.sendSync('get-system-preferences');
export const requestSetSystemPreference = (name, value) => window.ipcRenderer.send('request-set-system-preference', name, value);

// Workspace
export const getWorkspace = (id) => window.ipcRenderer.sendSync('get-workspace', id);
export const getWorkspacePreference = (id, preferenceName) => window.ipcRenderer.sendSync('get-workspace-preference', id, preferenceName);
export const getWorkspacePreferences = (id) => window.ipcRenderer.sendSync('get-workspace-preferences', id);
export const getWorkspaces = () => window.ipcRenderer.sendSync('get-workspaces');
export const requestClearBrowsingData = () => window.ipcRenderer.send('request-clear-browsing-data');
export const requestCreateWorkspace = (name, homeUrl, picture, transparentBackground) => {
  // only log event type to protect privacy
  amplitude.getInstance().logEvent('webcatalog-engine: add workspace');
  window.ipcRenderer.send('request-create-workspace', name, homeUrl, picture, transparentBackground);
};
export const requestHibernateWorkspace = (id) => window.ipcRenderer.send('request-hibernate-workspace', id);
export const requestOpenUrlInWorkspace = (url, id) => window.ipcRenderer.send('request-open-url-in-workspace', url, id);
export const requestRealignActiveWorkspace = () => window.ipcRenderer.send('request-realign-active-workspace');
export const requestRemoveWorkspace = (id) => {
  // only log event type to protect privacy
  amplitude.getInstance().logEvent('webcatalog-engine: remove workspace');
  window.ipcRenderer.send('request-remove-workspace', id);
};
export const requestRemoveWorkspacePicture = (id) => window.ipcRenderer.send('request-remove-workspace-picture', id);
export const requestSetActiveWorkspace = (id) => {
  // only log event type to protect privacy
  amplitude.getInstance().logEvent('webcatalog-engine: set active workspace');
  window.ipcRenderer.send('request-set-active-workspace', id);
};
export const requestSetWorkspace = (id, opts) => window.ipcRenderer.send('request-set-workspace', id, opts);
export const requestSetWorkspaces = (workspaces) => window.ipcRenderer.send('request-set-workspaces', workspaces);
export const requestSetWorkspacePicture = (id, picturePath) => window.ipcRenderer.send('request-set-workspace-picture', id, picturePath);
export const requestWakeUpWorkspace = (id) => window.ipcRenderer.send('request-wake-up-workspace', id);
export const requestReloadViewsDarkReader = () => window.ipcRenderer.send('request-reload-views-dark-reader');
export const requestReloadViewDarkReader = (id) => window.ipcRenderer.send('request-reload-view-dark-reader', id);

// Workspace Meta
export const getWorkspaceMeta = (id) => window.ipcRenderer.sendSync('get-workspace-meta', id);
export const getWorkspaceMetas = () => window.ipcRenderer.sendSync('get-workspace-metas');

// Find In Page
export const requestFindInPage = (text, forward) => window.ipcRenderer.send('request-find-in-page', text, forward);
export const requestStopFindInPage = (close) => window.ipcRenderer.send('request-stop-find-in-page', close);

// Auth
export const requestValidateAuthIdentity = (windowId, username, password) => window.ipcRenderer.send('request-validate-auth-identity', windowId, username, password);

// Native Theme
export const getShouldUseDarkColors = () => window.ipcRenderer.sendSync('get-should-use-dark-colors');

// Online Status
export const signalOnlineStatusChanged = (online) => window.ipcRenderer.send('online-status-changed', online);
