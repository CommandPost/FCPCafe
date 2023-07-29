# Motion Variables

On this page is a list of tokens you can use in **Apple Motion** to display metadata in Motion Templates, that will also appear in Final Cut Pro.

This was originally discovered on this [blog](https://web.archive.org/web/20180325233958/yuri.kiev.ua/2017/02/fcpx_autotitles/).

Special thanks to [F•X Mahoney](https://twitter.com/sightcreations) from [FCPxTemplates.com](https://fcpxtemplates.com) for his help correcting this page!

You can also download an example Motion Template effect [here](https://github.com/CommandPost/FCPCafe/raw/main/downloads/clip-info.zip).

The output of the effect looks like this in Final Cut Pro 10.6.6 (created in Motion 5.6.4):

![Motion Variables](/static/motion-example.jpg)

The below table contains all the tokens in the order they're shown in the above screenshot:

Token                                                       | Description
---                                                         | ---
`@#$sourceObject_projectOrSourceName`                       | Project or Source Name
`@#$sourceObject_sourceName`                                | Source Name
`@#$sourceObject_sequenceName`                              | Sequence Name
`@#$sourceObject_objectName`                                | Object Name
-                                                           | -
`@#$sourceObject_metadata_displayName`                      | Display Name
`@#$sourceObject_metadata_reel`                             | Source Reel Name
`@#$sourceObject_metadata_scene`                            | Scene
`@#$sourceObject_metadata_angle`                            | Angle
`@#$sourceObject_metadata_shot`                             | Shot
`@#$sourceObject_metadata_notes`                            | Notes
`@#$sourceObject_metadata_displayFormat`                    | Display Format
`@#$sourceObject_metadata_frameSize`                        | Frame Size
`@#$sourceObject_metadata_metadataLocation`                 | Location
`@#$sourceObject_metadata_effects`                          | Effects
`@#$sourceObject_metaData_metadataRotationAngle`            | Rotation Angle
`@#$sourceObject_metadata_metadataImportToApp`              | Import to App
`@#$sourceObject_metadata_contentCreated`                   | Content Created
`@#$sourceObject_metadata_timeRange`                        | Time Range
`@#$sourceObject_metadata_frameDuration`                    | Frame Duration
`@#$sourceObject_timecodeFrameDuration`                     | Timecode Frame Duration
-                                                           | -
`@#$sourceObject_metadata_metadataMediaStart`               | Media Start
`@#$sourceObject_metadata_metadataMediaEnd`                 | Media End
`@#$sourceObject_metadata_metadataMediaDuration`            | Media Duration
-                                                           | -
`@#$sourceObject_metadata_metadataSelectionStart`           | Selection Start
`@#$sourceObject_metadata_metadataSelectionEnd`             | Selection End
`@#$sourceObject_metadata_metadataSelectionDuration`        | Selection Duration
-                                                           | -
`@#$sourceObject_metadata_alphaHandling`                    | Alpha Handling
`@#$sourceObject_metadata_metadataDeinterlaceType`          | De-interlace Type
`@#$sourceObject_metadata_metadataFieldDominanceOverride`   | Field Dominance Override
`@#$sourceObject_sampleDuration`                            | Sample Duration
`@#$sourceObject_metadata_audioChannelCount`                | Audio Channel Count
`@#$sourceObject_metadata_audioSampleRate`                  | Audio Sample Rate
`@#$sourceObject_metadata_metadataRoles`                    | Metadata Roles
`@#$sourceObject_metadata_metadataVideoRoles`               | Video Roles
`@#$sourceObject_metadata_metadataAudioRoles`               | Audio Roles Metadata

---

!!!
Want to update any of the above? [Learn more here!](/contribute/)
!!!
