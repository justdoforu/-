report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20180602-180943\\backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "2.81",
          "analysisTime": 41
        },
        "diffImage": "..\\..\\..\\backstop_data\\bitmaps_test\\20180602-180943\\failed_diff_backstop_default_BackstopJS_Homepage_0_document_0_iphone6.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "..\\..\\..\\backstop_data\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "test": "..\\..\\..\\backstop_data\\bitmaps_test\\20180602-180943\\backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_default_BackstopJS_Homepage_0_document_1_tablet.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://map.qq.com/m/",
        "referenceUrl": "",
        "error": "Reference file not found E:\\一灯\\QA\\test\\backstop_data\\bitmaps_reference\\backstop_default_BackstopJS_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});