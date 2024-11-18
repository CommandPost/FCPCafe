### Uninstalling Final Cut Pro

For whatever reason Apple hasn't ever really had an official method for uninstalling apps.

On Windows you have **Add & Remove Programs**, but on Mac, they suggest just dragging the application to the trash/bin.

Alas, that only removes the application, but none of the preferences or support programs.

The easiest way to completely uninstall Final Cut Pro is using the free [AppCleaner](https://freemacsoft.net/appcleaner/).

If you want to uninstall manually, you'll need to remove:

- `/Applications/Final Cut Pro Trial.app`
- `/Applications/Final Cut Pro.app`
- `/Library/Application Support/Final Cut Pro System Support/`
- `/Library/Application Support/Final Cut Pro/`
- `~/Library/Application Scripts/com.apple.Compressor.BluRayH264Encoder`
- `~/Library/Application Scripts/com.apple.Compressor.DolbyDigitalEncoder`
- `~/Library/Application Scripts/com.apple.FinalCut.FxAnalyzer`
- `~/Library/Application Scripts/com.apple.FinalCut`
- `~/Library/Application Scripts/com.apple.videoapps.OOPDebayerService`
- `~/Library/Application Scripts/com.apple.videoapps.OOPProResRawService`
- `~/Library/Application Scripts/com.apple.videoapps.RegisterProExtension`
- `~/Library/Application Support/CrashReporter/Final Cut Pro_*.plist` (the `*` is a wildcard in this case)
- `~/Library/Application Support/Final Cut Pro Trial`
- `~/Library/Application Support/Final Cut Pro`
- `~/Library/Caches/com.apple.FinalCut`
- `~/Library/Caches/com.apple.finalcutpro.xml.export`
- `~/Library/Caches/com.apple.FinalCutTrial`
- `~/Library/Caches/com.apple.helpd/Generated/com.apple.FinalCutPro10.help*11.0` (the `*` is NOT a wildcard in this case)
- `~/Library/Caches/Final Cut Pro`
- `~/Library/Containers/com.apple.Compressor.BluRayH264Encoder`
- `~/Library/Containers/com.apple.Compressor.DolbyDigitalEncoder`
- `~/Library/Containers/com.apple.FinalCut.FxAnalyzer`
- `~/Library/Containers/com.apple.FinalCut`
- `~/Library/Containers/com.apple.videoapps.OOPDebayerService`
- `~/Library/Containers/com.apple.videoapps.OOPProResRawService`
- `~/Library/Containers/com.apple.videoapps.RegisterProExtension`
- `~/Library/Group Containers/PTN9T2S29T.com.apple.videoProApps`
- `~/Library/HTTPStorages/com.apple.FinalCut`
- `~/Library/Logs/Final Cut Pro`
- `~/Library/Preferences/com.apple.FinalCut.plist`
- `~/Library/Preferences/com.apple.FinalCutASD.plist`
- `~/Library/Preferences/com.apple.FinalCutTrial.plist`
- `~/Library/Preferences/com.apple.ProMSRendererTool.plist`
- `~/Library/WebKit/com.apple.FinalCut`

Please note that `~` is referring to your home directory (i.e. `/Users/your-user-name`).