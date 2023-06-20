### Backups - How to be safe?

Backing up your Final Cut Pro project files is crucial to prevent losing your work. Here are a few ways you can do this:

1. **Library Backups:** Final Cut Pro automatically creates backups of your libraries. These backups are stored in a folder named **Final Cut Backups** in your Movies folder. You can adjust how often these backups are made using [CommandPost](/ecosystem/tools/#commandpost).
2. **Duplicate Libraries:** To manually back up your work, you can duplicate your library in Finder and zip it. - as long as you store all Media outside the library.(see below) 
3. **External Drive:** You can also manually copy the library to an external hard drive or another secure location. Simply drag the library file in Finder to your backup location.
4. **Time Machine:** If you're using Apple's Time Machine backup system, make sure that your Final Cut Pro library is in a location that Time Machine backs up. Time Machine backs up your entire computer at regular intervals, so this provides a kind of automatic backup.
5. **Cloud Storage:** You can also use a cloud storage service like iCloud, Google Drive, or Dropbox for backups. Note that video files can be quite large, and you'll need enough storage space in your cloud service to accommodate them.

Remember to keep your backup drives or locations secure and check them regularly to make sure the backups are being performed correctly.

Before you perform any major edits or changes to a project, it's a good idea to create a backup. That way, if something goes wrong, you can go back to the backup version.

Also, keep in mind that Final Cut Pro libraries might only contain references to your media files if you're keeping your media external to the library, so it's important to also back up your media files.

keeping your Media outside the library: 
* go to settings > import > leave files in place. It's mandatory to check this setting from time to time.
* go to Library Properties > Storage Locations > Modify Settings, then 
* route Media into a folder of your choice. This creates Final Cut Original, ...Optimized, and Proxy Media Folders eventually. Only the ...Original folder shouldn't be deleted in any situation to avoid media-loss.
* leave Motion Content in Motion templates folder
* route Cache into a folder of your choice. This folder can be deleted at any time to free up disk-space.
* leave Backups in Final Cut Backups. That's in Movies/Final Cut Backups. If your Library file is on your desktop: route the Backups folder to external storage.
