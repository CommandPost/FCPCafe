# FCPXML

This section of the site is dedicated to **FCPXML**.

You can find the official Workflow Extensions documentation [here](https://developer.apple.com/documentation/professional_video_applications/fcpxml_reference?language=objc){target="_blank"}.

There's a great article called [Demystifying Final Cut Pro XMLs by Philip Hodgetts and Gregory Clarke](https://fcp.co/final-cut-pro/tutorials/1912-demystifying-final-cut-pro-xmls-by-philip-hodgetts-and-gregory-clarke){target="_blank"} over at fcp.co.

---

### DTD Validation

macOS has a built in XML lint tool - allowing you to validate a `FCPXML` document against it's `DTD` file.

!!!primary What's a DTD?
A DTD (Document Type Definition) file is used in XML to define the structure and the legal elements and attributes of an XML document. It's a set of markup declarations that provide a rulebook for a specific type of XML document, describing what the document contains and how those elements and attributes are organised.
!!!

You can download all the `FCPXML` `DTD` files [here](https://github.com/CommandPost/CommandPost/tree/develop/src/extensions/cp/apple/fcpxml/dtd){target="_blank"}.

You can then use this Terminal Command to validate things:

```
xmllint --dtdvalid "/path/to/FCPXMLv1_9.dtd" "/path/to/your/file.fcpxml"
```

!!!primary Tip!
You can just drag in a file from Finder into Terminal, and Terminal will write out the file's path.<br />
Simply type `xmllint --dtdvalid`, then drag in the `DTD` file from Finder, and then your `FCPXML` file.
!!!

---

{{ include "contribute-learn-more" }}