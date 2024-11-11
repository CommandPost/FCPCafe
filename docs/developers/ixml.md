# iXML

## Introduction

**iXML** is an open standard for the inclusion of location sound metadata in Broadcast Wave audio files.

This includes things like Scene, Take and Notes information. It is designed to standardise the exchange of metadata between field recorders and post production software.

The iXML specification describes an WAV RIFF chunk in BWF files which contains standard XML data following the [iXML specification](http://www.ixml.info).

iXML uses the XML (eXtensible Markup Language) standard for communication of tagged metadata. All fields are optional when creating iXML, and readers of iXML data must not assume or require any fields to be present.

A very simplified iXML data chunk, in a mono file with only the most basic metadata objects will look something like this:

```
	<?xml version="1.0" encoding="UTF-8"?>
	<BWFXML>
		<IXML_VERSION>1.27</IXML_VERSION>
		<PROJECT>A New Movie</PROJECT>
		<SCENE>21A</SCENE>
		<TAKE>10</TAKE>
		<TAPE>15</TAPE>
		<NOTE>free text note</NOTE>
		<TRACK_LIST>
			<TRACK_COUNT>1</TRACK_COUNT>
			<TRACK>
				<CHANNEL_INDEX>1</CHANNEL_INDEX>
				<INTERLEAVE_INDEX>1</INTERLEAVE_INDEX>
				<NAME>left</NAME>
				<FUNCTION>LEFT</FUNCTION>
			</TRACK>
		</TRACK_LIST>
	</BWFXML>
```

You can read a [very detailed article about iXML](http://www.gallery.co.uk/ixml/iXML-LineUp.pdf).

---

## Specification

See the [iXML Specification](http://www.ixml.info).

---

## Final Cut Pro iXML Support

In Final Cut Pro, you can assign roles based on the iXML metadata using the **Assign iXML track names if available** checkbox in Import preferences.

![Audio Roles](/static/audio-roles.png)

When this checkbox is selected, Final Cut Pro analyses imported audio for iXML metadata tags, then creates subroles with the names embedded by the audio field recorder, and assigns the subroles to the corresponding components in the imported clips.

The Assign Role setting and the **Assign iXML track names if available** setting can work together. For example, you can create a custom role such as Location Sound using the role editor and then choose that role from the Assign Role pop-up menu. If the **Assign iXML track names if available** checkbox is selected, imported clips are assigned the Location Sound role, with custom audio channel names coming from the iXML file.

![Audio Roles](/static/roles.png)

All of this occurs automatically on import, and the settings are retained for future import operations.

It's important to note however that during the import, Final Cut Pro will copy this iXML metadata and store it in the Library database - it does **not** read the iXML metadata more than once, so if you update the iXML metadata after import, these changes will **not** be reflected in your Final Cut Pro Library.

Although QuickTime files can also contain iXML metadata, as of version 10.3.3, Final Cut Pro seems to only be able to analyse WAV files on import.

Final Cut Pro Supports the following iXML fields:

| iXML Parameter | Final Cut Pro Metadata Property |
|----------------|---------------------------------|
| CIRCLED        | Good                            |
| NOTE           | Notes                           |
| TAPE           | Reel                            |
| SCENE          | Scene                           |
| TAKE           | Take                            |
| TRACK: NAME    | Audio Configuration Track Name  |

As of Final Cut Pro 10.3.3, the following parameter's don't seem to be supported:

* PROJECT
* TAKE_TYPE
* NO_GOOD
* FALSE_START
* WILD_TRACK
* UBITS
* SYNC_POINT_LIST
* SPEED
* HISTORY
* FILE_SET
* TRACK_LIST: FUNCTION

---

## Tools

The most useful tool for reading and writing iXML data is the free [Sound Devices Wave Agent](https://www.sounddevices.com/products/accessories/software/wave-agent).
