// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/** @fileoverview Externs generated from namespace: fileManagerPrivate */

/** @const */
chrome.fileManagerPrivate = {};

/** @enum {string} */
chrome.fileManagerPrivate.VolumeType = {
  DRIVE: 'drive',
  DOWNLOADS: 'downloads',
  REMOVABLE: 'removable',
  ARCHIVE: 'archive',
  PROVIDED: 'provided',
  MTP: 'mtp',
  MEDIA_VIEW: 'media_view',
  CROSTINI: 'crostini',
  ANDROID_FILES: 'android_files',
  DOCUMENTS_PROVIDER: 'documents_provider',
  TESTING: 'testing',
  SMB: 'smb',
  SYSTEM_INTERNAL: 'system_internal',
  GUEST_OS: 'guest_os',
};

/** @enum {string} */
chrome.fileManagerPrivate.DeviceType = {
  USB: 'usb',
  SD: 'sd',
  OPTICAL: 'optical',
  MOBILE: 'mobile',
  UNKNOWN: 'unknown',
};

/**
 * @enum {string}
 */
chrome.fileManagerPrivate.DriveConnectionStateType = {
  OFFLINE: 'OFFLINE',
  METERED: 'METERED',
  ONLINE: 'ONLINE',
};

/**
 * @enum {string}
 */
chrome.fileManagerPrivate.DriveOfflineReason = {
  NOT_READY: 'NOT_READY',
  NO_NETWORK: 'NO_NETWORK',
  NO_SERVICE: 'NO_SERVICE',
};

/** @enum {string} */
chrome.fileManagerPrivate.MountCondition = {
  UNKNOWN: 'unknown',
  UNSUPPORTED: 'unsupported',
};

/** @enum {string} */
chrome.fileManagerPrivate.MountContext = {
  USER: 'user',
  AUTO: 'auto',
};

/** @enum {string} */
chrome.fileManagerPrivate.MountCompletedEventType = {
  MOUNT: 'mount',
  UNMOUNT: 'unmount',
};

/** @enum {string} */
chrome.fileManagerPrivate.MountCompletedStatus = {
  SUCCESS: 'success',
  ERROR_UNKNOWN: 'error_unknown',
  ERROR_INTERNAL: 'error_internal',
  ERROR_INVALID_ARGUMENT: 'error_invalid_argument',
  ERROR_INVALID_PATH: 'error_invalid_path',
  ERROR_PATH_ALREADY_MOUNTED: 'error_path_already_mounted',
  ERROR_PATH_NOT_MOUNTED: 'error_path_not_mounted',
  ERROR_DIRECTORY_CREATION_FAILED: 'error_directory_creation_failed',
  ERROR_INVALID_MOUNT_OPTIONS: 'error_invalid_mount_options',
  ERROR_INVALID_UNMOUNT_OPTIONS: 'error_invalid_unmount_options',
  ERROR_INSUFFICIENT_PERMISSIONS: 'error_insufficient_permissions',
  ERROR_MOUNT_PROGRAM_NOT_FOUND: 'error_mount_program_not_found',
  ERROR_MOUNT_PROGRAM_FAILED: 'error_mount_program_failed',
  ERROR_INVALID_DEVICE_PATH: 'error_invalid_device_path',
  ERROR_UNKNOWN_FILESYSTEM: 'error_unknown_filesystem',
  ERROR_UNSUPPORTED_FILESYSTEM: 'error_unsupported_filesystem',
  ERROR_INVALID_ARCHIVE: 'error_invalid_archive',
  ERROR_NEED_PASSWORD: 'error_need_password',
  ERROR_IN_PROGRESS: 'error_in_progress',
  ERROR_CANCELLED: 'error_cancelled',
};

/** @enum {string} */
chrome.fileManagerPrivate.FormatFileSystemType = {
  VFAT: 'vfat',
  EXFAT: 'exfat',
  NTFS: 'ntfs',
};

/** @enum {string} */
chrome.fileManagerPrivate.TransferState = {
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

/** @enum {string} */
chrome.fileManagerPrivate.CopyOrMoveProgressStatusType = {
  BEGIN: 'begin',
  PROGRESS: 'progress',
  END_COPY: 'end_copy',
  END_MOVE: 'end_move',
  END_REMOVE_SOURCE: 'end_remove_source',
  SUCCESS: 'success',
  ERROR: 'error',
};

/** @enum {string} */
chrome.fileManagerPrivate.FileWatchEventType = {
  CHANGED: 'changed',
  ERROR: 'error',
};

/** @enum {string} */
chrome.fileManagerPrivate.ChangeType = {
  ADD_OR_UPDATE: 'add_or_update',
  DELETE: 'delete',
};

/** @enum {string} */
chrome.fileManagerPrivate.SearchType = {
  EXCLUDE_DIRECTORIES: 'EXCLUDE_DIRECTORIES',
  SHARED_WITH_ME: 'SHARED_WITH_ME',
  OFFLINE: 'OFFLINE',
  ALL: 'ALL',
};

/** @enum {string} */
chrome.fileManagerPrivate.ZoomOperationType = {
  IN: 'in',
  OUT: 'out',
  RESET: 'reset',
};

/** @enum {string} */
chrome.fileManagerPrivate.InspectionType = {
  NORMAL: 'normal',
  CONSOLE: 'console',
  ELEMENT: 'element',
  BACKGROUND: 'background',
};

/** @enum {string} */
chrome.fileManagerPrivate.DeviceEventType = {
  DISABLED: 'disabled',
  REMOVED: 'removed',
  HARD_UNPLUGGED: 'hard_unplugged',
  FORMAT_START: 'format_start',
  FORMAT_SUCCESS: 'format_success',
  FORMAT_FAIL: 'format_fail',
  RENAME_START: 'rename_start',
  RENAME_SUCCESS: 'rename_success',
  RENAME_FAIL: 'rename_fail',
  PARTITION_START: 'partition_start',
  PARTITION_SUCCESS: 'partition_success',
  PARTITION_FAIL: 'partition_fail',
};

/** @enum {string} */
chrome.fileManagerPrivate.DriveSyncErrorType = {
  DELETE_WITHOUT_PERMISSION: 'delete_without_permission',
  SERVICE_UNAVAILABLE: 'service_unavailable',
  NO_SERVER_SPACE: 'no_server_space',
  NO_LOCAL_SPACE: 'no_local_space',
  MISC: 'misc',
};

/** @enum {string} */
chrome.fileManagerPrivate.DriveConfirmDialogType = {
  ENABLE_DOCS_OFFLINE: 'enable_docs_offline',
};

/** @enum {string} */
chrome.fileManagerPrivate.DriveDialogResult = {
  NOT_DISPLAYED: 'not_displayed',
  ACCEPT: 'accept',
  REJECT: 'reject',
  DISMISS: 'dismiss',
};

/** @enum {string} */
chrome.fileManagerPrivate.TaskResult = {
  OPENED: 'opened',
  MESSAGE_SENT: 'message_sent',
  FAILED: 'failed',
  EMPTY: 'empty',
  FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED:
      'failed_plugin_vm_directory_not_shared',
};

/** @enum {string} */
chrome.fileManagerPrivate.DriveShareType = {
  CAN_EDIT: 'can_edit',
  CAN_COMMENT: 'can_comment',
  CAN_VIEW: 'can_view',
};

/** @enum {string} */
chrome.fileManagerPrivate.EntryPropertyName = {
  SIZE: 'size',
  MODIFICATION_TIME: 'modificationTime',
  MODIFICATION_BY_ME_TIME: 'modificationByMeTime',
  THUMBNAIL_URL: 'thumbnailUrl',
  CROPPED_THUMBNAIL_URL: 'croppedThumbnailUrl',
  IMAGE_WIDTH: 'imageWidth',
  IMAGE_HEIGHT: 'imageHeight',
  IMAGE_ROTATION: 'imageRotation',
  PINNED: 'pinned',
  PRESENT: 'present',
  HOSTED: 'hosted',
  AVAILABLE_OFFLINE: 'availableOffline',
  AVAILABLE_WHEN_METERED: 'availableWhenMetered',
  DIRTY: 'dirty',
  CUSTOM_ICON_URL: 'customIconUrl',
  CONTENT_MIME_TYPE: 'contentMimeType',
  SHARED_WITH_ME: 'sharedWithMe',
  SHARED: 'shared',
  STARRED: 'starred',
  EXTERNAL_FILE_URL: 'externalFileUrl',
  ALTERNATE_URL: 'alternateUrl',
  SHARE_URL: 'shareUrl',
  CAN_COPY: 'canCopy',
  CAN_DELETE: 'canDelete',
  CAN_RENAME: 'canRename',
  CAN_ADD_CHILDREN: 'canAddChildren',
  CAN_SHARE: 'canShare',
  CAN_PIN: 'canPin',
  IS_MACHINE_ROOT: 'isMachineRoot',
  IS_EXTERNAL_MEDIA: 'isExternalMedia',
  IS_ARBITRARY_SYNC_FOLDER: 'isArbitrarySyncFolder',
};

/** @enum {string} */
chrome.fileManagerPrivate.EntryTagVisibility = {
  PRIVATE: 'private',
  PUBLIC: 'public',
};

/** @enum {string} */
chrome.fileManagerPrivate.Source = {
  FILE: 'file',
  DEVICE: 'device',
  NETWORK: 'network',
  SYSTEM: 'system',
};

/** @enum {string} */
chrome.fileManagerPrivate.Verb = {
  OPEN_WITH: 'open_with',
  ADD_TO: 'add_to',
  PACK_WITH: 'pack_with',
  SHARE_WITH: 'share_with',
};

/** @enum {string} */
chrome.fileManagerPrivate.SourceRestriction = {
  ANY_SOURCE: 'any_source',
  NATIVE_SOURCE: 'native_source',
};

/** @enum {string} */
chrome.fileManagerPrivate.RecentFileType = {
  ALL: 'all',
  AUDIO: 'audio',
  IMAGE: 'image',
  VIDEO: 'video',
  DOCUMENT: 'document',
};

/** @enum {string} */
chrome.fileManagerPrivate.InstallLinuxPackageResponse = {
  STARTED: 'started',
  FAILED: 'failed',
  INSTALL_ALREADY_ACTIVE: 'install_already_active',
};

/** @enum {string} */
chrome.fileManagerPrivate.CrostiniEventType = {
  ENABLE: 'enable',
  DISABLE: 'disable',
  SHARE: 'share',
  UNSHARE: 'unshare',
  DROP_FAILED_PLUGIN_VM_DIRECTORY_NOT_SHARED:
      'drop_failed_plugin_vm_directory_not_shared',
};

/** @enum {string} */
chrome.fileManagerPrivate.SharesheetLaunchSource = {
  CONTEXT_MENU: 'context_menu',
  SHARESHEET_BUTTON: 'sharesheet_button',
  UNKNOWN: 'unknown',
};

/** @enum {string} */
chrome.fileManagerPrivate.IOTaskState = {
  QUEUED: 'queued',
  IN_PROGRESS: 'in_progress',
  SUCCESS: 'success',
  ERROR: 'error',
  CANCELLED: 'cancelled',
};

/** @enum {string} */
chrome.fileManagerPrivate.IOTaskType = {
  COPY: 'copy',
  DELETE: 'delete',
  EXTRACT: 'extract',
  MOVE: 'move',
  TRASH: 'trash',
  ZIP: 'zip',
};

/**
 * @typedef {{
 *   appId: string,
 *   taskType: string,
 *   actionId: string
 * }}
 */
chrome.fileManagerPrivate.FileTaskDescriptor;

/**
 * @typedef {{
 *   descriptor: !chrome.fileManagerPrivate.FileTaskDescriptor,
 *   title: string,
 *   verb: (!chrome.fileManagerPrivate.Verb|undefined),
 *   iconUrl: (string|undefined),
 *   isDefault: (boolean|undefined),
 *   isGenericFileHandler: (boolean|undefined)
 * }}
 */
chrome.fileManagerPrivate.FileTask;

/**
 * @typedef {{
 *   size: (number|undefined),
 *   modificationTime: (number|undefined),
 *   modificationByMeTime: (number|undefined),
 *   thumbnailUrl: (string|undefined),
 *   croppedThumbnailUrl: (string|undefined),
 *   imageWidth: (number|undefined),
 *   imageHeight: (number|undefined),
 *   imageRotation: (number|undefined),
 *   pinned: (boolean|undefined),
 *   present: (boolean|undefined),
 *   hosted: (boolean|undefined),
 *   availableOffline: (boolean|undefined),
 *   availableWhenMetered: (boolean|undefined),
 *   dirty: (boolean|undefined),
 *   customIconUrl: (string|undefined),
 *   contentMimeType: (string|undefined),
 *   sharedWithMe: (boolean|undefined),
 *   shared: (boolean|undefined),
 *   starred: (boolean|undefined),
 *   externalFileUrl: (string|undefined),
 *   alternateUrl: (string|undefined),
 *   shareUrl: (string|undefined),
 *   canCopy: (boolean|undefined),
 *   canDelete: (boolean|undefined),
 *   canRename: (boolean|undefined),
 *   canAddChildren: (boolean|undefined),
 *   canShare: (boolean|undefined),
 *   canPin: (boolean|undefined),
 *   isMachineRoot: (boolean|undefined),
 *   isExternalMedia: (boolean|undefined),
 *   isArbitrarySyncFolder: (boolean|undefined)
 * }}
 */
chrome.fileManagerPrivate.EntryProperties;

/**
 * @typedef {{
 *   totalSize: number,
 *   remainingSize: number
 * }}
 */
chrome.fileManagerPrivate.MountPointSizeStats;

/**
 * @typedef {{
 *   profileId: string,
 *   displayName: string,
 *   isCurrentProfile: boolean
 * }}
 */
chrome.fileManagerPrivate.ProfileInfo;

/**
 * @typedef {{
 *   icon16x16Url: (string|undefined),
 *   icon32x32Url: (string|undefined)
 * }}
 */
chrome.fileManagerPrivate.IconSet;

/**
 * @typedef {{
 *   volumeId: string,
 *   fileSystemId: (string|undefined),
 *   providerId: (string|undefined),
 *   source: !chrome.fileManagerPrivate.Source,
 *   volumeLabel: (string|undefined),
 *   profile: !chrome.fileManagerPrivate.ProfileInfo,
 *   sourcePath: (string|undefined),
 *   volumeType: !chrome.fileManagerPrivate.VolumeType,
 *   deviceType: (!chrome.fileManagerPrivate.DeviceType|undefined),
 *   devicePath: (string|undefined),
 *   isParentDevice: (boolean|undefined),
 *   isReadOnly: boolean,
 *   isReadOnlyRemovableDevice: boolean,
 *   hasMedia: boolean,
 *   configurable: boolean,
 *   watchable: boolean,
 *   mountCondition: (!chrome.fileManagerPrivate.MountCondition|undefined),
 *   mountContext: (!chrome.fileManagerPrivate.MountContext|undefined),
 *   diskFileSystemType: (string|undefined),
 *   iconSet: !chrome.fileManagerPrivate.IconSet,
 *   driveLabel: (string|undefined),
 *   remoteMountPath: (string|undefined)
 * }}
 */
chrome.fileManagerPrivate.VolumeMetadata;

/**
 * @typedef {{
 *   eventType: !chrome.fileManagerPrivate.MountCompletedEventType,
 *   status: !chrome.fileManagerPrivate.MountCompletedStatus,
 *   volumeMetadata: !chrome.fileManagerPrivate.VolumeMetadata,
 *   shouldNotify: boolean
 * }}
 */
chrome.fileManagerPrivate.MountCompletedEvent;

/**
 * @typedef {{
 *   fileUrl: string,
 *   transferState: !chrome.fileManagerPrivate.TransferState,
 *   processed: number,
 *   total: number,
 *   numTotalJobs: number,
 *   hideWhenZeroJobs: boolean
 * }}
 */
chrome.fileManagerPrivate.FileTransferStatus;

/**
 * @typedef {{
 *   type: !chrome.fileManagerPrivate.DriveSyncErrorType,
 *   fileUrl: string
 * }}
 */
chrome.fileManagerPrivate.DriveSyncErrorEvent;

/**
 * @typedef {{
 *   type: !chrome.fileManagerPrivate.DriveConfirmDialogType,
 *   fileUrl: string
 * }}
 */
chrome.fileManagerPrivate.DriveConfirmDialogEvent;

/**
 * @typedef {{
 *   type: !chrome.fileManagerPrivate.CopyOrMoveProgressStatusType,
 *   sourceUrl: (string|undefined),
 *   destinationUrl: (string|undefined),
 *   size: (number|undefined),
 *   error: (string|undefined)
 * }}
 */
chrome.fileManagerPrivate.CopyOrMoveProgressStatus;

/**
 * @typedef {{
 *   url: string,
 *   changes: !Array<!chrome.fileManagerPrivate.ChangeType>
 * }}
 */
chrome.fileManagerPrivate.FileChange;

/**
 * @typedef {{
 *   eventType: !chrome.fileManagerPrivate.FileWatchEventType,
 *   entry: Object,
 *   changedFiles: (!Array<!chrome.fileManagerPrivate.FileChange>|undefined)
 * }}
 */
chrome.fileManagerPrivate.FileWatchEvent;

/**
 * @typedef {{
 *   driveEnabled: boolean,
 *   cellularDisabled: boolean,
 *   searchSuggestEnabled: boolean,
 *   use24hourClock: boolean,
 *   timezone: string,
 *   arcEnabled: boolean,
 *   arcRemovableMediaAccessEnabled: boolean,
 *   folderShortcuts: !Array<string>
 * }}
 */
chrome.fileManagerPrivate.Preferences;

/**
 * @typedef {{
 *   cellularDisabled: (boolean|undefined),
 *   arcEnabled: (boolean|undefined),
 *   arcRemovableMediaAccessEnabled: (boolean|undefined),
 *   folderShortcuts: (!Array<string>|undefined)
 * }}
 */
chrome.fileManagerPrivate.PreferencesChange;

/**
 * @typedef {{
 *   query: string,
 *   nextFeed: string
 * }}
 */
chrome.fileManagerPrivate.SearchParams;

/**
 * @typedef {{
 *   query: string,
 *   types: !chrome.fileManagerPrivate.SearchType,
 *   maxResults: number
 * }}
 */
chrome.fileManagerPrivate.SearchMetadataParams;

/**
 * @typedef {{
 *   entry: Entry,
 *   highlightedBaseName: string,
 *   availableOffline: (boolean|undefined)
 * }}
 */
chrome.fileManagerPrivate.DriveMetadataSearchResult;

/**
 * @typedef {{
 *   type: !chrome.fileManagerPrivate.DriveConnectionStateType,
 *   reason: (!chrome.fileManagerPrivate.DriveOfflineReason|undefined),
 *   hasCellularNetworkAccess: boolean,
 *   canPinHostedFiles: boolean
 * }}
 */
chrome.fileManagerPrivate.DriveConnectionState;

/**
 * @typedef {{
 *   type: !chrome.fileManagerPrivate.DeviceEventType,
 *   devicePath: string,
 *   deviceLabel: string
 * }}
 */
chrome.fileManagerPrivate.DeviceEvent;

/**
 * @typedef {{
 *   providerId: string,
 *   iconSet: !chrome.fileManagerPrivate.IconSet,
 *   name: string,
 *   configurable: boolean,
 *   watchable: boolean,
 *   multipleMounts: boolean,
 *   source: string
 * }}
 */
chrome.fileManagerPrivate.Provider;

/**
 * @typedef {{
 * name: string,
 * version: string,
 * summary: (string|undefined),
 * description: (string|undefined),
 * }}
 */
chrome.fileManagerPrivate.LinuxPackageInfo;

/**
 * @typedef {{
 * id: number,
 * displayName: string,
 * }}
 */
chrome.fileManagerPrivate.MountableGuest;

/**
 * @typedef {{
 * eventType: chrome.fileManagerPrivate.CrostiniEventType,
 * vmName: string,
 * entries: !Array<!Entry>,
 * }}
 */
chrome.fileManagerPrivate.CrostiniEvent;

/**
 * @typedef {{
 *   name: string,
 *   packageName: string,
 *   activityName: string,
 *   iconSet: !chrome.fileManagerPrivate.IconSet
 * }}
 */
chrome.fileManagerPrivate.AndroidApp;

/**
 * @typedef {{
 *   type: string,
 *   tags: !Object,
 * }}
 */
chrome.fileManagerPrivate.StreamInfo;

/**
 * @typedef {{
 *   data: string,
 *   type: string,
 * }}
 */
chrome.fileManagerPrivate.AttachedImages;

/**
 * @typedef {{
 *   mimeType: string,
 *   height: (number|undefined),
 *   width: (number|undefined),
 *   duration: (number|undefined),
 *   rotation: (number|undefined),
 *   album: (string|undefined),
 *   artist: (string|undefined),
 *   comment: (string|undefined),
 *   copyright: (string|undefined),
 *   disc: (number|undefined),
 *   genre: (string|undefined),
 *   language: (string|undefined),
 *   title: (string|undefined),
 *   track: (number|undefined),
 *   rawTags: !Array<!chrome.fileManagerPrivate.StreamInfo>,
 *   attachedImages: !Array<!chrome.fileManagerPrivate.AttachedImages>,
 * }}
 */
chrome.fileManagerPrivate.MediaMetadata;

/**
 * @typedef {{
 *   itemUrls: !Array<string>
 * }}
 */
chrome.fileManagerPrivate.HoldingSpaceState;

/**
 * @typedef {{
 *   currentDirectoryURL: (string|undefined),
 *   selectionURL: (string|undefined)
 * }}
 */
chrome.fileManagerPrivate.OpenWindowParams;

/**
 * @typedef {{
 *   volumeId: string,
 *   writable: boolean,
 * }}
 */
chrome.fileManagerPrivate.GetVolumeRootOptions;

/**
 * @typedef {{
 *   destinationFolder: (DirectoryEntry|undefined),
 * }}
 */
chrome.fileManagerPrivate.IOTaskParams;

/**
 * @typedef {{
 *   type: !chrome.fileManagerPrivate.IOTaskType,
 *   state: !chrome.fileManagerPrivate.IOTaskState,
 *   numRemainingItems: number,
 *   itemCount: number,
 *   bytesTransferred: number,
 *   sourceName: string,
 *   destinationName: string,
 *   totalBytes: number,
 *   taskId: number,
 *   remainingSeconds: number,
 *   errorName: string,
 * }}
 */
chrome.fileManagerPrivate.ProgressStatus;

/**
 * Logout the current user for navigating to the re-authentication screen for
 * the Google account.
 */
chrome.fileManagerPrivate.logoutUserForReauthentication = function() {};

/**
 * Cancels file selection.
 */
chrome.fileManagerPrivate.cancelDialog = function() {};

/**
 * Executes file browser task over selected files. |descriptor| The unique
 * identifier of task to execute. |entries| Array of file entries |callback|
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor
 * @param {!Array<!Entry>} entries
 * @param {function(!chrome.fileManagerPrivate.TaskResult)} callback |result|
 *     Result of the task execution.
 */
chrome.fileManagerPrivate.executeTask = function(descriptor, entries, callback) {};

/**
 * Sets the default task for the supplied MIME types and path extensions. Lists
 * of MIME types and entries may contain duplicates. |descriptor| The unique
 * identifier of task to mark as default. |entries| Array of selected file
 * entries to extract path extensions from. |mimeTypes| Array of selected file
 * MIME types. |callback|
 * @param {!chrome.fileManagerPrivate.FileTaskDescriptor} descriptor
 * @param {!Array<!Entry>} entries
 * @param {!Array<string>} mimeTypes
 * @param {!function()} callback Callback that does not take arguments.
 */
chrome.fileManagerPrivate.setDefaultTask = function(descriptor, entries, mimeTypes,
    callback) {};

/**
 * Gets the list of tasks that can be performed over selected files. |entries|
 * Array of selected entries |callback|
 * @param {!Array<!Entry>} entries
 * @param {function((!Array<!chrome.fileManagerPrivate.FileTask>|undefined))}
 *     callback |tasks| The list of matched file entries for this task.
 */
chrome.fileManagerPrivate.getFileTasks = function(entries, callback) {};

/**
 * Gets the MIME type of an entry.
 * @param {!Entry} entry The Entry.
 * @param {function((string|undefined))} callback The MIME type callback.
 */
chrome.fileManagerPrivate.getMimeType = function(entry, callback) {};

/**
 * Gets the content sniffed MIME type of a file.
 * @param {!FileEntry} fileEntry The file entry.
 * @param {function((string|undefined))} callback The MIME type callback.
 * $(ref:runtime.lastError) will be set if there was an error.
 */
chrome.fileManagerPrivate.getContentMimeType = function(fileEntry, callback) {};

/**
 * Gets the content metadata from an Audio or Video file.
 * @param {!FileEntry} fileEntry The file entry.
 * @param {string} mimeType The content sniffed mimeType of the file.
 * @param {boolean} includeImages If true, return metadata tags and thumbnail
 *     images. If false, return metadata tags only.
 * @param {function((!chrome.fileManagerPrivate.MediaMetadata|undefined))}
 *     callback The content MediaMetadata callback.
 * $(ref:runtime.lastError) will be set if there was an error.
 */
chrome.fileManagerPrivate.getContentMetadata = function(fileEntry, mimeType,
    includeImages, callback) {};

/**
 * Gets localized strings and initialization data. |callback|
 * @param {function((!Object|undefined))} callback |result| Hash containing the
 *     string assets.
 */
chrome.fileManagerPrivate.getStrings = function(callback) {};

/**
 * Adds file watch. |entry| Entry of file to watch |callback|
 * @param {!Entry} entry
 * @param {function((boolean|undefined))} callback |success| True when file
 *     watch is successfully added.
 */
chrome.fileManagerPrivate.addFileWatch = function(entry, callback) {};

/**
 * Removes file watch. |entry| Entry of watched file to remove |callback|
 * @param {!Entry} entry
 * @param {function((boolean|undefined))} callback |success| True when file
 *     watch is successfully
 * removed.
 */
chrome.fileManagerPrivate.removeFileWatch = function(entry, callback) {};

/**
 * Enables the extenal file scheme necessary to initiate drags to the browser
 * window for files on the external backend.
 */
chrome.fileManagerPrivate.enableExternalFileScheme = function() {};

/**
 * Requests R/W access to the specified entries as |entryUrls|. Note, that only
 * files backed by external file system backend will be granted the access.
 * @param {!Array<string>} entryUrls
 * @param {function()} callback Completion callback.
 */
chrome.fileManagerPrivate.grantAccess = function(entryUrls, callback) {};

/**
 * Selects multiple files. |selectedPaths| Array of selected paths
 * |shouldReturnLocalPath| true if paths need to be resolved to local paths.
 * |callback|
 * @param {!Array<string>} selectedPaths
 * @param {boolean} shouldReturnLocalPath
 * @param {function()} callback Callback that does not take arguments.
 */
chrome.fileManagerPrivate.selectFiles = function(selectedPaths,
    shouldReturnLocalPath, callback) {};

/**
 * Selects a file. |selectedPath| A selected path |index| Index of Filter
 * |forOpening| true if paths are selected for opening. false if for saving.
 * |shouldReturnLocalPath| true if paths need to be resolved to local paths.
 * |callback|
 * @param {string} selectedPath
 * @param {number} index
 * @param {boolean} forOpening
 * @param {boolean} shouldReturnLocalPath
 * @param {function()} callback Callback that does not take arguments.
 */
chrome.fileManagerPrivate.selectFile = function(selectedPath, index, forOpening,
    shouldReturnLocalPath, callback) {};

/**
 * Requests additional properties for files. |entries| list of entries of files
 * |callback|
 * @param {!Array<!Entry>} entries
 * @param {!Array<string>} names
 * @param {function((!Array<!chrome.fileManagerPrivate.EntryProperties>|undefined))}
 *     callback |entryProperties| A dictionary containing properties of the
 *     requested entries.
 */
chrome.fileManagerPrivate.getEntryProperties = function(entries, names,
    callback) {};

/**
 * Pins/unpins a Drive file in the cache. |entry| Entry of a file to pin/unpin.
 * |pin| Pass true to pin the file. |callback| Completion callback.
 * $(ref:runtime.lastError) will be set if there was an error.
 * @param {!Entry} entry
 * @param {boolean} pin
 * @param {function()} callback Callback that does not take arguments.
 */
chrome.fileManagerPrivate.pinDriveFile = function(entry, pin, callback) {};

/**
 * Resolves file entries in the isolated file system and returns corresponding
 * entries in the external file system mounted to Chrome OS file manager
 * backend. If resolving entry fails, the entry will be just ignored and the
 * corresponding entry does not appear in the result.
 * @param {!Array<!Entry>} entries
 * @param {function(!Array<!Entry>): void} callback Completion callback
 *     with resolved entries.
 */
chrome.fileManagerPrivate.resolveIsolatedEntries = function(entries,
    callback) {};

/**
 * Mounts a resource or an archive.
 * @param {string} fileUrl Mount point source.
 * @param {string|undefined} password Optional password to decrypt the archive.
 * @param {function(string): void} callback callback Callback called with the
 *     source path of the mount.
 */
chrome.fileManagerPrivate.addMount = function(fileUrl, password, callback) {};

/**
 * Cancels an archive mounting operation.
 * @param {string} fileUrl Mount point source. Should be same as the one passed
 *     to addMount.
 * @param {function()} callback
 */
chrome.fileManagerPrivate.cancelMounting = function(fileUrl, callback) {};

/**
 * Unmounts a mounted resource. |volumeId| An ID of the volume.
 * @param {string} volumeId
 */
chrome.fileManagerPrivate.removeMount = function(volumeId) {};

/**
 * Get the list of mounted volumes. |callback|
 * @param {function((!Array<!chrome.fileManagerPrivate.VolumeMetadata>|undefined))}
 *     callback Callback with the list of
 *     chrome.fileManagerPrivate.VolumeMetadata representing mounted volumes.
 */
chrome.fileManagerPrivate.getVolumeMetadataList = function(callback) {};

/**
 * Returns a list of files not allowed to be transferred. |entries| list of
 * source entries to be transferred. If any of |entries| is a directory, it will
 * check all its files recursively. |destinationEntry| Entry of the destination
 * directory.
 * @param {!Array<!Entry>} entries
 * @param {!DirectoryEntry} destinationEntry
 * @param {!Array<!Entry>} callback Entries of the files not allowed to be
 *     transferred.
 */
chrome.fileManagerPrivate.getDisallowedTransfers = function(
    entries, destinationEntry, callback) {};

/**
 * Starts to copy an entry. If the source is a directory, the copy is done
 * recursively. |entry| Entry of the source entry to be copied. |parent| Entry
 * of the destination directory. |newName| Name of the new entry. It must not
 * contain '/'. |callback| Completion callback.
 * @param {!Entry} entry
 * @param {!DirectoryEntry} parentEntry
 * @param {string} newName
 * @param {function((number|undefined))} callback |copyId| ID of the copy task.
 *     Can be used to identify the progress, and to cancel the task.
 */
chrome.fileManagerPrivate.startCopy = function(entry, parentEntry, newName,
    callback) {};

/**
 * Cancels the running copy task. |copyId| ID of the copy task to be cancelled.
 * |callback| Completion callback of the cancel.
 * @param {number} copyId
 * @param {function()} callback Callback that does not take arguments.
 */
chrome.fileManagerPrivate.cancelCopy = function(copyId, callback) {};

/**
 * Retrieves total and remaining size of a mount point. |volumeId| ID of the
 * volume to be checked. |callback|
 * @param {string} volumeId
 * @param {function((!chrome.fileManagerPrivate.MountPointSizeStats|undefined))}
 *     callback Name/value pairs of size stats. Will be undefined if stats could
 *     not be determined.
 */
chrome.fileManagerPrivate.getSizeStats = function(volumeId, callback) {};

/**
 * Formats a mounted volume. |volumeId| ID of the volume to be formatted.
 * @param {string} volumeId
 * @param {chrome.fileManagerPrivate.FormatFileSystemType} filesystem
 * @param {string} volumeLabel
 */
chrome.fileManagerPrivate.formatVolume = function(volumeId, filesystem,
    volumeLabel) {};

/**
 * Deletes partitions of removable device, creates a single partition
 * and format it.
 * @param {string} devicePath
 * @param {chrome.fileManagerPrivate.FormatFileSystemType} filesystem
 * @param {string} volumeLabel
 */
chrome.fileManagerPrivate.singlePartitionFormat = function(devicePath,
  filesystem, volumeLabel) {};

/**
 * Renames a mounted volume. |volumeId| ID of the volume to be renamed to
 * |newName|.
 * @param {string} volumeId
 * @param {string} newName
 */
chrome.fileManagerPrivate.renameVolume = function(volumeId, newName) {};

/**
 * Retrieves file manager preferences. |callback|
 * @param {function((!chrome.fileManagerPrivate.Preferences|undefined))}
 *     callback
 */
chrome.fileManagerPrivate.getPreferences = function(callback) {};

/**
 * Sets file manager preferences. |changeInfo|
 * @param {chrome.fileManagerPrivate.PreferencesChange} changeInfo
 */
chrome.fileManagerPrivate.setPreferences = function(changeInfo) {};

/**
 * Performs drive content search. |searchParams| |callback|
 * @param {chrome.fileManagerPrivate.SearchParams} searchParams
 * @param {function((!Array<Entry>|undefined), (string|undefined))} callback
 * Entries and ID of the feed that contains next chunk of the search result.
 * Should be sent to the next searchDrive request to perform incremental search.
 */
chrome.fileManagerPrivate.searchDrive = function(searchParams, callback) {};

/**
 * Performs drive metadata search. |searchParams| |callback|
 * @param {!chrome.fileManagerPrivate.SearchMetadataParams} searchParams
 * @param {function(!Array<!chrome.fileManagerPrivate.DriveMetadataSearchResult>): void}
 *     callback
 */
chrome.fileManagerPrivate.searchDriveMetadata = function(searchParams, callback) {};

/**
 * Search for files in the given volume, whose content hash matches the list of
 * given hashes.
 * @param {string} volumeId
 * @param {!Array<string>} hashes
 * @param {function((!Object<string, !Array<string>>|undefined))} callback
 */
chrome.fileManagerPrivate.searchFilesByHashes = function(volumeId, hashes,
    callback) {};

/**
 * Search files in My Files.
 * @param {!chrome.fileManagerPrivate.SearchMetadataParams} searchParams
 * @param {function(!Array<Object>): void} callback
 */
chrome.fileManagerPrivate.searchFiles = function(searchParams, callback) {};

/**
 * Creates a ZIP file for the selected files and folders. Folders are
 * recursively explored and zipped. Hidden files and folders (with names
 * starting with a dot) found during recursive exploration are included too.
 * @param {!Array<!Entry>} entries Entries of the selected files and folders to
 *     zip. They must be under the |parentEntry| directory.
 * @param {!DirectoryEntry} parentEntry Entry of the directory containing the
 *     selected files and folders. This is where the ZIP file will be created,
 *     too.
 * @param {string} destName Name of the destination ZIP file. The ZIP file will
 *     be created in the directory specified by |parentEntry|.
 * @param {function(number, number)} callback called with (zipId, totalBytes)
 *     where |zipId| is the ID of the ZIP operation, and |totalBytes| is the
 *     total number of bytes in all the files that are going to be zipped.
 */
chrome.fileManagerPrivate.zipSelection = function(
    entries, parentEntry, destName, callback) {};

/**
 * Cancels an ongoing ZIP operation.
 * Does nothing if there is no matching ongoing ZIP operation.
 * @param {number} zipId ID of the ZIP operation.
 */
chrome.fileManagerPrivate.cancelZip = function(zipId) {};

/**
 * Gets the progress of an ongoing ZIP operation.
 * @param {number} zipId ID of the ZIP operation.
 * @param {function(number, number)} callback called with progress information
 *     (result, bytes), where |result| is less than 0 if the operation is still
 *     in progress, 0 if the operation finished successfully, or greater than 0
 *     if the operation finished with an error, and |bytes| is the total number
 *     of bytes having been zipped so far.
 */
chrome.fileManagerPrivate.getZipProgress = function(zipId, callback) {};

/**
 * Retrieves the state of the current drive connection. |callback|
 * @param {function(!chrome.fileManagerPrivate.DriveConnectionState): void}
 *     callback
 */
chrome.fileManagerPrivate.getDriveConnectionState = function(callback) {};

/**
 * Checks whether the path name length fits in the limit of the filesystem.
 * |parentEntry| The parent directory entry. |name| The name of the file.
 * |callback| Called back when the check is finished.
 * @param {!DirectoryEntry} parentEntry
 * @param {string} name
 * @param {function((boolean|undefined))} callback |result| true if the length
 *     is in the valid range, false otherwise.
 */
chrome.fileManagerPrivate.validatePathNameLength = function(
    parentEntry, name, callback) {};

/**
 * Changes the zoom factor of the Files app. |operation| Zooming mode.
 * @param {string} operation
 */
chrome.fileManagerPrivate.zoom = function(operation) {};

/**
 * Requests a Webstore API OAuth2 access token. |callback|
 * @param {function((string|undefined))} callback |accessToken| OAuth2 access
 *     token, or an empty string if failed to fetch.
 */
chrome.fileManagerPrivate.requestWebStoreAccessToken = function(callback) {};

/**
 * Requests a download url to download the file contents.
 * @param {!Entry} entry
 * @param {function((string|undefined))} callback Callback with the result url.
 */
chrome.fileManagerPrivate.getDownloadUrl = function(entry, callback) {};

/**
 * Obtains a list of profiles that are logged-in.
 * @param {function((!Array<!chrome.fileManagerPrivate.ProfileInfo>|undefined),
 *     (string|undefined), (string|undefined))} callback Callback with list of
 *     profile information, |runningProfile| ID of the profile that runs the
 *     application instance. |showingProfile| ID of the profile that shows the
 *     application window.
 */
chrome.fileManagerPrivate.getProfiles = function(callback) {};

/**
 * Opens inspector window. |type| InspectionType which specifies how to open
 * inspector.
 * @param {string} type
 */
chrome.fileManagerPrivate.openInspector = function(type) {};

/**
 * Opens settings sub page. |sub_page| Name of a sub page.
 * @param {string} sub_page
 */
chrome.fileManagerPrivate.openSettingsSubpage = function(sub_page) {};

/**
 * Computes an MD5 checksum for the given file.
 * @param {!Entry} entry
 * @param {function((string|undefined))} callback
 */
chrome.fileManagerPrivate.computeChecksum = function(entry, callback) {};

/**
 * Returns list of available providers.
 * @param {function((!Array<!chrome.fileManagerPrivate.Provider>|undefined))}
 *     callback
 */
chrome.fileManagerPrivate.getProviders = function(callback) {};

/**
 * Requests adding a new provided file system. If not possible, then an error
 * via chrome.runtime.lastError is returned.
 * @param {string} providerId
 * @param {function()} callback
 */
chrome.fileManagerPrivate.addProvidedFileSystem =
    function(providerId, callback) {};

/**
 * Requests configuring an existing file system. If not possible, then returns
 * an error via chrome.runtime.lastError.
 * @param {string} volumeId
 * @param {function()} callback
 */
chrome.fileManagerPrivate.configureVolume = function(volumeId, callback) {};

/**
 * Requests fetching list of actions for the specified set of entries. If not
 * possible, then returns an error via chrome.runtime.lastError.
 * @param {!Array<!Entry>} entries
 * @param {function((!Array<!chrome.fileSystemProvider.Action>|undefined))}
 *     callback
 */
chrome.fileManagerPrivate.getCustomActions = function(entries, callback) {};

/**
 * Executes the action on the specified set of entries. If not possible, then
 * returns an error via chrome.runtime.lastError.
 * @param {!Array<!Entry>} entries
 * @param {string} actionId
 * @param {function()} callback
 */
chrome.fileManagerPrivate.executeCustomAction = function(
    entries, actionId, callback) {};

/**
 * Get the total size of a directory. |entry| Entry of the target directory.
 * |callback|
 * @param {!DirectoryEntry} entry
 * @param {function(number)} callback
 */
chrome.fileManagerPrivate.getDirectorySize = function(entry, callback) {};

/**
 * Gets recently modified files across file systems.
 * @param {string} restriction
 * @param {string} fileType
 * @param {function((!Array<!FileEntry>))} callback
 */
chrome.fileManagerPrivate.getRecentFiles = function(restriction, fileType, callback) {};

/**
 * Requests the root directory of a volume. The ID of the volume must be
 * specified as |volumeId| of the |options| paramter.
 * @param {!chrome.fileManagerPrivate.GetVolumeRootOptions} options
 * @param {function(!DirectoryEntry)} callback
 */
chrome.fileManagerPrivate.getVolumeRoot = function(options, callback) {};

/**
 * Starts and mounts crostini container.
 * @param {function()} callback Callback called after the crostini container
 *     is started and mounted.
 *     chrome.runtime.lastError will be set if there was an error.
 */
chrome.fileManagerPrivate.mountCrostini = function(callback) {};

/**
 * Lists guests
 * @param {function((!Array<!chrome.fileManagerPrivate.MountableGuest>))} callback
 *     chrome.runtime.lastError will be set if there was an error.
 */
chrome.fileManagerPrivate.listMountableGuests = function(callback) {};

/**
 * Starts and mounts target guest
 * @param {!number} id Id of the mount provider to use
 * @param {function()} callback Callback called after the requests completes
 * (either successfully or with an error).
 *     chrome.runtime.lastError will be set if there was an error.
 */
chrome.fileManagerPrivate.mountGuest = function(id, callback) {};

/**
 * Shares paths with crostini container.
 * @param {string} vmName VM to share path with.
 * @param {!Array<!Entry>} entries Entries of the files and directories to
 *     share.
 * @param {boolean} persist If true, share will persist across restarts.
 * @param {function()} callback Callback called after the paths are shared.
 *     chrome.runtime.lastError will be set if there was an error.
 */
chrome.fileManagerPrivate.sharePathsWithCrostini = function(
    vmName, entries, persist, callback) {};

/**
 * Unshares path with crostini container.
 * @param {string} vmName VM to unshare path from.
 * @param {!Entry} entry Entry of the file or directory to unshare.
 * @param {function()} callback Callback called after the path is unshared.
 *     chrome.runtime.lastError will be set if there was an error.
 */
chrome.fileManagerPrivate.unsharePathWithCrostini = function(
    vmName, entry, callback) {};

/**
 * Returns list of paths shared with the crostini container, and whether this is
 * the first time this function is called for this session.
 * @param {boolean} observeFirstForSession If true, callback provides whether
 *     this is the first time this function has been called with
 *     observeFirstForSession true.
 * @param {string} vmName VM to get shared paths of.
 * @param {function(!Array<!Entry>, boolean)} callback
 */
chrome.fileManagerPrivate.getCrostiniSharedPaths = function(
    observeFirstForSession, vmName, callback) {};

/**
 * Requests information about a Linux package.
 * @param {!Entry} entry
 * @param {function((!chrome.fileManagerPrivate.LinuxPackageInfo|undefined))}
 *     callback
 *    Called when package information is retrieved.
 *    chrome.runtime.lastError will be set if there was an error.
 */
chrome.fileManagerPrivate.getLinuxPackageInfo = function(entry, callback) {};

/**
 * Starts installation of a Linux package.
 * @param {!Entry} entry
 * @param {function(!chrome.fileManagerPrivate.InstallLinuxPackageResponse,
 *    string)} callback
 *    Called when the installation is either started or fails to start.
 */
chrome.fileManagerPrivate.installLinuxPackage = function(entry, callback) {};

/**
 * Imports a Crostini Image File (.tini). This overrides the existing Linux apps
 * and files.
 * @param {!Entry} entry
 */
chrome.fileManagerPrivate.importCrostiniImage = function(entry) {};

/**
 * For a file in DriveFS, retrieves its thumbnail. If |cropToSquare| is true,
 * returns a thumbnail appropriate for file list or grid views; otherwise,
 * returns a thumbnail appropriate for quickview.
 * @param {!FileEntry} entry
 * @param {boolean} cropToSquare
 * @param {function(string): void} callback |thumbnailDataUrl| A data URL for
 *     the thumbnail as a PNG; |thumbnailDataUrl| is empty if no thumbnail was
 *     available.
 */
chrome.fileManagerPrivate.getDriveThumbnail = function(entry, cropToSquare, callback) {};

/**
 * For a local PDF file, retrieves its thumbnail with a given |width| and
 * |height|.
 * @param {!FileEntry} entry
 * @param {number} width
 * @param {number} height
 * @param {function(string): void} callback |thumbnailDataUrl| A data URL for
 *     the thumbnail as a PNG; |thumbnailDataUrl| is empty if no thumbnail was
 *     available.
 */
chrome.fileManagerPrivate.getPdfThumbnail = function(entry, width, height, callback) {};

/**
  Retrieves a thumbnail of an ARC DocumentsProvider file, close in size to
  |widthHint| and |heightHint|, but not necessarily exactly this size.
 * @param {!FileEntry} entry
 * @param {number} widthHint
 * @param {number} heightHint
 * @param {function(string): void} callback |thumbnailDataUrl| A data URL for the
 *     thumbnail; |thumbnailDataUrl| is empty if no thumbnail was available.
 *     Note: The thumbnail data may originate from third-party application code,
 *     and is untrustworthy (Security).
 */
chrome.fileManagerPrivate.getArcDocumentsProviderThumbnail = function(entry, widthHint, heightHint, callback) {};

/**
 * @param {!Array<string>} extensions
 * @param {function(!Array<chrome.fileManagerPrivate.AndroidApp>): void} callback
 *     Completion callback.
 */
chrome.fileManagerPrivate.getAndroidPickerApps = function(extensions, callback) {};

/**
 * @param {chrome.fileManagerPrivate.AndroidApp} androidApp
 * @param {function()} callback Completion callback.
 */
chrome.fileManagerPrivate.selectAndroidPickerApp = function(androidApp, callback) {};

/**
 * Return true if sharesheet contains share targets for entries.
 * @param {!Array<!Entry>} entries
 * @param {function((boolean|undefined))} callback
 */
chrome.fileManagerPrivate.sharesheetHasTargets = function(entries, callback) {};

/**
 * Invoke Sharesheet for selected files. If not possible, then returns
 * an error via chrome.runtime.lastError. |entries| Array of selected entries.
 * @param {!Array<!Entry>} entries
 * @param {chrome.fileManagerPrivate.SharesheetLaunchSource} launchSource
 * @param {function()} callback
 */
chrome.fileManagerPrivate.invokeSharesheet = function(
    entries, launchSource, callback) {};

/**
 * Adds or removes a list of entries to temporary holding space. Any entries
 * whose current holding space state matches the intended state will be skipped.
 * |entries| The list of entries whose holding space needs to be updated. |add|
 * Whether items should be added or removed from the holding space. |callback|
 * Completion callback.
 * @param {!Array<!Entry>} entries
 * @param {boolean} added
 * @param {function(): void=} callback Callback that does not take arguments.
 */
chrome.fileManagerPrivate.toggleAddedToHoldingSpace = function(entries, added, callback) {};

/**
 * Retrieves the current holding space state, for example the list of items the
 * holding space currently contains. |callback| The result callback.
 * @param {function(!chrome.fileManagerPrivate.HoldingSpaceState): void}
 *     callback |state| Describes the current holding space state.
 */
chrome.fileManagerPrivate.getHoldingSpaceState = function(callback) {};

/**
 * Returns true via `callback` if tablet mode is enabled, false otherwise.
 * @param {function(boolean): void} callback
 */
chrome.fileManagerPrivate.isTabletModeEnabled = function(callback) {};

/**
 * Notifies Drive about the result of the last dialog shown.
 * @param {chrome.fileManagerPrivate.DriveDialogResult} result
 */
chrome.fileManagerPrivate.notifyDriveDialogResult = function(result) {};

/**
 * Opens a new browser tab and navigates to `URL`.
 * @param {!string} URL
 */
chrome.fileManagerPrivate.openURL = function(URL) {};

/**
 * Creates a new Files app window in the directory provided in `params`.
 * @param {!chrome.fileManagerPrivate.OpenWindowParams} params
 * @param {function(boolean): void} callback |result| Boolean result returned by
 *     the invoked function.
 */
chrome.fileManagerPrivate.openWindow = function(params, callback) {};

/**
 * Opens the feedback report window.
 */
chrome.fileManagerPrivate.sendFeedback = function() {};

/**
 * Starts an I/O task of type |type| on |entries|. Task type specific parameters
 * passed via |params|.
 * @param {!chrome.fileManagerPrivate.IOTaskType} type
 * @param {!Array<!Entry>} entries
 * @param {!chrome.fileManagerPrivate.IOTaskParams} params
 */
chrome.fileManagerPrivate.startIOTask = function(type, entries, params) {};

/**
 * Cancels an I/O task by id. Task ids are communicated to the Files App in
 * each I/O task's progress status.
 * @param {number} taskId
 */
chrome.fileManagerPrivate.cancelIOTask = function (taskId) { };

/**
 * Tells DriveFS to update its cached pin states of hosted files (once).
 */
chrome.fileManagerPrivate.pollDriveHostedFilePinStates = function() {};

/**
 * Returns color via `callback` for Files app foreground window frame.
 * @param {function(string): void} callback |color| String containing the color
 *     of the title bar.
 */
chrome.fileManagerPrivate.getFrameColor = function(callback) {};

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onMountCompleted;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onFileTransfersUpdated;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onPinTransfersUpdated;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onCopyProgress;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onDirectoryChanged;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onPreferencesChanged;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onDriveConnectionStatusChanged;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onDeviceChanged;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onDriveSyncError;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onDriveConfirmDialog;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onAppsUpdated;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onCrostiniChanged;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onTabletModeChanged;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onIOTaskProgressStatus;

/** @type {!ChromeEvent} */
chrome.fileManagerPrivate.onMountableGuestsChanged;
