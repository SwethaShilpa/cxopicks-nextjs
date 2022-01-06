self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_swethashilpa_ma_Documents_cxopicks_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! multiselect-react-dropdown */ "./node_modules/multiselect-react-dropdown/dist/index.js");
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/toast */ "./components/toast.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\swethashilpa.ma\\Documents\\cxopicks-nextjs\\pages\\index.js",
    _s = $RefreshSig$();





var __N_SSG = true;
function Home(props) {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      productImage = _useState[0],
      setProductImage = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      productName = _useState2[0],
      setProductName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      productDescription = _useState3[0],
      setProductDescription = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      targetIndustry = _useState4[0],
      setTargetIndustry = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      website = _useState5[0],
      setWebsite = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      certifications = _useState6[0],
      setCertifications = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      deployment = _useState7[0],
      setDeployment = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      submitted = _useState8[0],
      setSubmitted = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    label: "Team Lead Certificate",
    value: "teamLeadCertificate"
  }, {
    label: "Business Certificate",
    value: "businessCertificate"
  }, {
    label: "Sales Certificate",
    value: "salesCertificate"
  }, {
    label: "Talent Certificate",
    value: "talentCertificate"
  }, {
    label: "Global Certificate",
    value: "globalCertificate"
  }, {
    label: "membership Certificate",
    value: "membershipCertificate"
  }]),
      certificateOptions = _useState9[0],
      setCertificateOptions = _useState9[1];

  var checkboxList = props.data.data.industries;

  var handleChange = function handleChange(e) {
    var checked = e.target.checked;
    var checkedValue = e.target.value;
    var beforeValue = deployment.includes(checkedValue);

    if (checked && !beforeValue) {
      setDeployment([].concat((0,C_Users_swethashilpa_ma_Documents_cxopicks_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(deployment), [checkedValue]));
    } else if (!checked && beforeValue) {
      setDeployment(deployment.filter(function (item) {
        return item != checkedValue;
      }));
    }
  };

  var onCancel = function onCancel() {
    setProductImage('');
    setProductName('');
    setProductDescription('');
    setTargetIndustry([]);
    setWebsite('');
    setCertifications([]);
    setDeployment([]);
    setSubmitted(false);
  };

  var onContinue = function onContinue() {
    setSubmitted(true);

    if (!productName || !productDescription || !website || targetIndustry.length == 0) {
      return;
    } else {
      onCancel();
      (0,_components_toast__WEBPACK_IMPORTED_MODULE_5__.default)('success', "Product Details Added Successfully");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Cxopicks | Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Generated by create next app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "page-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "col-lg-12 col-md-12 col-12 p-0",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "page_heading",
          children: "Product Details"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grey_box_bg",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "content-wrapper",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "card-body p-0 my-4",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "mx-0 form_fields_grey_bg",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row m-0 bor_btm_span",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "upload_photo_bg col-5",
                  children: productImage == '' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                    className: "fa fa-file-image-o fa-3x",
                    "aria-hidden": "true"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 45
                  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: productImage,
                    className: "",
                    alt: "Profile Picture",
                    width: "100",
                    height: "100"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 45
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col-7 text-md-left",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "upload-profile-label",
                    children: "Upload your Logo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: "d-block to-choose-a-file",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      type: "file",
                      id: "actual-btn",
                      onChange: function onChange(e) {
                        return setProductImage(URL.createObjectURL(e.target.files[0]));
                      },
                      hidden: true,
                      accept: "image/*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      htmlFor: "actual-btn",
                      className: "blue_link",
                      children: "Click here "
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 45
                    }, this), "to choose a file", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 130
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group col-md-4",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    className: "form-label",
                    children: ["Product Name ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "required-red",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 114,
                      columnNumber: 84
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "text",
                    className: "form-control " + (submitted && !productName ? "is-invalid" : ""),
                    name: "productName",
                    value: productName,
                    placeholder: "Type here",
                    onChange: function onChange(e) {
                      return setProductName(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 41
                  }, this), submitted && !productName && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    id: "email-error",
                    className: "error invalid-feedback",
                    children: "Product Name is Required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 113,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group col-md-8",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    className: "form-label",
                    children: ["Product Description ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "required-red",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 91
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
                    className: "form-control " + (submitted && !productDescription ? "is-invalid" : ""),
                    name: "productDescription",
                    value: productDescription,
                    placeholder: "Type here",
                    onChange: function onChange(e) {
                      return setProductDescription(e.target.value);
                    },
                    rows: "8"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 41
                  }, this), submitted && !productDescription && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    id: "email-error",
                    className: "error invalid-feedback",
                    children: "Product Description is Required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group col-md-4",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    className: "form-label",
                    children: ["Product Target Industry ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "required-red",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 95
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "multi_sel_dropdown",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_4__.Multiselect, {
                      className: "basic-single-select",
                      options: checkboxList,
                      displayValue: "industry_name",
                      id: "targetIndustry",
                      showCheckbox: true,
                      placeholder: "Select here",
                      value: targetIndustry,
                      selectedValues: targetIndustry,
                      onSelect: function onSelect(e) {
                        return setTargetIndustry(e);
                      },
                      onRemove: function onRemove(e) {
                        return setTargetIndustry(e);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "arrow_select_drop",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        "class": "fas fa-chevron-down"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 81
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 41
                  }, this), submitted && targetIndustry.length == 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    id: "email-error",
                    className: "text-danger",
                    children: "Product Target Industry is Required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group col-md-4",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    className: "form-label",
                    children: ["Product Website ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "required-red",
                      children: "*"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 158,
                      columnNumber: 87
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                    type: "text",
                    className: "form-control " + (submitted && !website ? "is-invalid" : ""),
                    name: "website",
                    value: website,
                    placeholder: "Type here",
                    onChange: function onChange(e) {
                      return setWebsite(e.target.value);
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 41
                  }, this), submitted && !website && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    id: "email-error",
                    className: "error invalid-feedback",
                    children: "Product Website is Required"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "form-group col-md-4",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                    className: "form-label",
                    children: "Product Certifications"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "multi_sel_dropdown",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_4__.Multiselect, {
                      options: certificateOptions,
                      displayValue: "label",
                      showCheckbox: true,
                      placeholder: "Select here",
                      value: certifications,
                      id: "targetIndustry",
                      selectedValues: certifications,
                      onSelect: function onSelect(e) {
                        return setCertifications(e);
                      },
                      onRemove: function onRemove(e) {
                        return setCertifications(e);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "arrow_select_drop",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        "class": "fas fa-chevron-down"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 179,
                        columnNumber: 81
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 179,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "form-group col-md-4",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                  className: "form-label",
                  children: "Product Deployment"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "form-check form-check-inline me-5 ps-0",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      "class": "form-check-input",
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox1",
                      value: "cloud",
                      checked: deployment.find(function (ch) {
                        return ch == "cloud";
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      "class": "form-check-label",
                      "for": "inlineCheckbox1",
                      children: "Cloud"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "form-check form-check-inline me-5 ps-0",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      "class": "form-check-input",
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox2",
                      value: "hosted",
                      checked: deployment.find(function (ch) {
                        return ch == "hosted";
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      "class": "form-check-label",
                      "for": "inlineCheckbox2",
                      children: "Hosted"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 192,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 41
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    "class": "form-check form-check-inline me-5 ps-0",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      "class": "form-check-input",
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox3",
                      value: "selfHosted",
                      checked: deployment.find(function (ch) {
                        return ch == "selfHosted";
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      "class": "form-check-label",
                      "for": "inlineCheckbox3",
                      children: "Self Hosted"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 196,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 194,
                    columnNumber: 41
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 185,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "col-12 buttons-group",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "grey_btn_bg mx-3",
                onClick: onCancel,
                children: " Cancel "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                className: "yellow-btn",
                onClick: function onClick(e) {
                  e.currentTarget.blur();
                  onContinue();
                },
                children: "Continue"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 203,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Home, "3Gh/m6ZhWI8eA5UKLzniubw4rDo=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlU3RhdGUiLCJwcm9kdWN0SW1hZ2UiLCJzZXRQcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwidGFyZ2V0SW5kdXN0cnkiLCJzZXRUYXJnZXRJbmR1c3RyeSIsIndlYnNpdGUiLCJzZXRXZWJzaXRlIiwiY2VydGlmaWNhdGlvbnMiLCJzZXRDZXJ0aWZpY2F0aW9ucyIsImRlcGxveW1lbnQiLCJzZXREZXBsb3ltZW50Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibGFiZWwiLCJ2YWx1ZSIsImNlcnRpZmljYXRlT3B0aW9ucyIsInNldENlcnRpZmljYXRlT3B0aW9ucyIsImNoZWNrYm94TGlzdCIsImRhdGEiLCJpbmR1c3RyaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJjaGVja2VkVmFsdWUiLCJiZWZvcmVWYWx1ZSIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsIm9uQ2FuY2VsIiwib25Db250aW51ZSIsImxlbmd0aCIsIlRvYXN0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJmaW5kIiwiY2giLCJjdXJyZW50VGFyZ2V0IiwiYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFlZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDekJDLFlBRHlCO0FBQUEsTUFDWEMsZUFEVzs7QUFBQSxtQkFFTUYsK0NBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUV6QkcsV0FGeUI7QUFBQSxNQUVaQyxjQUZZOztBQUFBLG1CQUdvQkosK0NBQVEsQ0FBQyxFQUFELENBSDVCO0FBQUEsTUFHekJLLGtCQUh5QjtBQUFBLE1BR0xDLHFCQUhLOztBQUFBLG1CQUlZTiwrQ0FBUSxDQUFDLEVBQUQsQ0FKcEI7QUFBQSxNQUl6Qk8sY0FKeUI7QUFBQSxNQUlUQyxpQkFKUzs7QUFBQSxtQkFLRlIsK0NBQVEsQ0FBQyxFQUFELENBTE47QUFBQSxNQUt6QlMsT0FMeUI7QUFBQSxNQUtoQkMsVUFMZ0I7O0FBQUEsbUJBTVlWLCtDQUFRLENBQUMsRUFBRCxDQU5wQjtBQUFBLE1BTXpCVyxjQU55QjtBQUFBLE1BTVRDLGlCQU5TOztBQUFBLG1CQU9JWiwrQ0FBUSxDQUFDLEVBQUQsQ0FQWjtBQUFBLE1BT3pCYSxVQVB5QjtBQUFBLE1BT2JDLGFBUGE7O0FBQUEsbUJBUUVkLCtDQUFRLENBQUMsS0FBRCxDQVJWO0FBQUEsTUFRekJlLFNBUnlCO0FBQUEsTUFRZEMsWUFSYzs7QUFBQSxtQkFTb0JoQiwrQ0FBUSxDQUN4RCxDQUNJO0FBQUVpQixTQUFLLEVBQUUsdUJBQVQ7QUFBbUNDLFNBQUssRUFBRTtBQUExQyxHQURKLEVBQ3NFO0FBQUVELFNBQUssRUFBRSxzQkFBVDtBQUFrQ0MsU0FBSyxFQUFFO0FBQXpDLEdBRHRFLEVBRUk7QUFBRUQsU0FBSyxFQUFFLG1CQUFUO0FBQStCQyxTQUFLLEVBQUU7QUFBdEMsR0FGSixFQUUrRDtBQUFFRCxTQUFLLEVBQUUsb0JBQVQ7QUFBZ0NDLFNBQUssRUFBRTtBQUF2QyxHQUYvRCxFQUdJO0FBQUVELFNBQUssRUFBRSxvQkFBVDtBQUFnQ0MsU0FBSyxFQUFFO0FBQXZDLEdBSEosRUFHaUU7QUFBRUQsU0FBSyxFQUFFLHdCQUFUO0FBQW9DQyxTQUFLLEVBQUU7QUFBM0MsR0FIakUsQ0FEd0QsQ0FUNUI7QUFBQSxNQVN6QkMsa0JBVHlCO0FBQUEsTUFTTEMscUJBVEs7O0FBZ0JoQyxNQUFNQyxZQUFZLEdBQUd0QixLQUFLLENBQUN1QixJQUFOLENBQVdBLElBQVgsQ0FBZ0JDLFVBQXJDOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QixRQUFNQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxPQUF6QjtBQUNBLFFBQU1FLFlBQVksR0FBR0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNULEtBQTlCO0FBQ0EsUUFBSVcsV0FBVyxHQUFHaEIsVUFBVSxDQUFDaUIsUUFBWCxDQUFvQkYsWUFBcEIsQ0FBbEI7O0FBQ0EsUUFBR0YsT0FBTyxJQUFJLENBQUNHLFdBQWYsRUFBNEI7QUFDeEJmLG1CQUFhLGlMQUFLRCxVQUFMLElBQWlCZSxZQUFqQixHQUFiO0FBQ0gsS0FGRCxNQUVPLElBQUcsQ0FBQ0YsT0FBRCxJQUFZRyxXQUFmLEVBQTRCO0FBQy9CZixtQkFBYSxDQUFDRCxVQUFVLENBQUNrQixNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLElBQUlKLFlBQVo7QUFBQSxPQUF0QixDQUFELENBQWI7QUFDSDtBQUNKLEdBVEQ7O0FBV0EsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQi9CLG1CQUFlLENBQUMsRUFBRCxDQUFmO0FBQ0FFLGtCQUFjLENBQUMsRUFBRCxDQUFkO0FBQ0FFLHlCQUFxQixDQUFDLEVBQUQsQ0FBckI7QUFDQUUscUJBQWlCLENBQUMsRUFBRCxDQUFqQjtBQUNBRSxjQUFVLENBQUMsRUFBRCxDQUFWO0FBQ0FFLHFCQUFpQixDQUFDLEVBQUQsQ0FBakI7QUFDQUUsaUJBQWEsQ0FBQyxFQUFELENBQWI7QUFDQUUsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxHQVREOztBQVdBLE1BQU1rQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCbEIsZ0JBQVksQ0FBQyxJQUFELENBQVo7O0FBQ0EsUUFBSSxDQUFDYixXQUFELElBQWdCLENBQUNFLGtCQUFqQixJQUF1QyxDQUFDSSxPQUF4QyxJQUFtREYsY0FBYyxDQUFDNEIsTUFBZixJQUF5QixDQUFoRixFQUFtRjtBQUMvRTtBQUNILEtBRkQsTUFFTztBQUNIRixjQUFRO0FBQ1JHLGdFQUFLLENBQUMsU0FBRCxFQUFZLG9DQUFaLENBQUw7QUFDSDtBQUNKLEdBUkQ7O0FBVUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxrREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSTtBQUFLLGVBQVMsRUFBQyxjQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLGdDQUFmO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxvQkFBZjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBQywwQkFBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQyxzQkFBZjtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQyx1QkFBZjtBQUFBLDRCQUNDbkMsWUFBWSxJQUFJLEVBQWhCLGdCQUVPO0FBQUcsNkJBQVMsRUFBQywwQkFBYjtBQUF3QyxtQ0FBWTtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZQLGdCQUlPO0FBQ0ksdUJBQUcsRUFBRUEsWUFEVDtBQUVJLDZCQUFTLEVBQUMsRUFGZDtBQUdJLHVCQUFHLEVBQUMsaUJBSFI7QUFJSSx5QkFBSyxFQUFDLEtBSlY7QUFLSSwwQkFBTSxFQUFDO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFnQkk7QUFBSywyQkFBUyxFQUFDLG9CQUFmO0FBQUEsMENBQ0k7QUFBTSw2QkFBUyxFQUFDLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJO0FBQU0sNkJBQVMsRUFBQywwQkFBaEI7QUFBQSw0Q0FDSTtBQUFPLDBCQUFJLEVBQUMsTUFBWjtBQUNBLHdCQUFFLEVBQUMsWUFESDtBQUVBLDhCQUFRLEVBQUUsa0JBQUN3QixDQUFEO0FBQUEsK0JBQU92QixlQUFlLENBQUNtQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JiLENBQUMsQ0FBQ0UsTUFBRixDQUFTWSxLQUFULENBQWUsQ0FBZixDQUFwQixDQUFELENBQXRCO0FBQUEsdUJBRlY7QUFHQSw0QkFBTSxNQUhOO0FBSUEsNEJBQU0sRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFNSTtBQUFPLDZCQUFPLEVBQUMsWUFBZjtBQUE0QiwrQkFBUyxFQUFDLFdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU5KLG1DQU15RjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQU56RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUE2Qkk7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMscUJBQWY7QUFBQSwwQ0FDSTtBQUFPLDZCQUFTLEVBQUMsWUFBakI7QUFBQSw2REFBMkM7QUFBTSwrQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSTtBQUFPLHdCQUFJLEVBQUMsTUFBWjtBQUNBLDZCQUFTLEVBQUUsbUJBQW9CeEIsU0FBUyxJQUFJLENBQUNaLFdBQWYsR0FBOEIsWUFBOUIsR0FBNkMsRUFBaEUsQ0FEWDtBQUVBLHdCQUFJLEVBQUMsYUFGTDtBQUdBLHlCQUFLLEVBQUVBLFdBSFA7QUFJQSwrQkFBVyxFQUFDLFdBSlo7QUFLQSw0QkFBUSxFQUFFLGtCQUFDc0IsQ0FBRDtBQUFBLDZCQUFPckIsY0FBYyxDQUFDcUIsQ0FBQyxDQUFDRSxNQUFGLENBQVNULEtBQVYsQ0FBckI7QUFBQTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosRUFRS0gsU0FBUyxJQUFJLENBQUNaLFdBQWQsaUJBQ0c7QUFBTSxzQkFBRSxFQUFDLGFBQVQ7QUFBdUIsNkJBQVMsRUFBQyx3QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBVFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE3QkosZUEyQ0k7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBQSx1Q0FDSTtBQUFLLDJCQUFTLEVBQUMscUJBQWY7QUFBQSwwQ0FDSTtBQUFPLDZCQUFTLEVBQUMsWUFBakI7QUFBQSxvRUFBa0Q7QUFBTSwrQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSTtBQUFVLDZCQUFTLEVBQUUsbUJBQW9CWSxTQUFTLElBQUksQ0FBQ1Ysa0JBQWYsR0FBcUMsWUFBckMsR0FBb0QsRUFBdkUsQ0FBckI7QUFBaUcsd0JBQUksRUFBQyxvQkFBdEc7QUFBMkgseUJBQUssRUFBRUEsa0JBQWxJO0FBQXNKLCtCQUFXLEVBQUMsV0FBbEs7QUFBOEssNEJBQVEsRUFBRSxrQkFBQ29CLENBQUQ7QUFBQSw2QkFBT25CLHFCQUFxQixDQUFDbUIsQ0FBQyxDQUFDRSxNQUFGLENBQVNULEtBQVYsQ0FBNUI7QUFBQSxxQkFBeEw7QUFBc08sd0JBQUksRUFBQztBQUEzTztBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKLEVBR0tILFNBQVMsSUFBSSxDQUFDVixrQkFBZCxpQkFDRztBQUFNLHNCQUFFLEVBQUMsYUFBVDtBQUF1Qiw2QkFBUyxFQUFDLHdCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTNDSixlQW9ESTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFBLHdDQUNJO0FBQUssMkJBQVMsRUFBQyxxQkFBZjtBQUFBLDBDQUNJO0FBQU8sNkJBQVMsRUFBQyxZQUFqQjtBQUFBLHdFQUFzRDtBQUFNLCtCQUFTLEVBQUMsY0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUVJO0FBQUssNkJBQVMsRUFBQyxvQkFBZjtBQUFBLDRDQUNJLDhEQUFDLG1FQUFEO0FBQ0ksK0JBQVMsRUFBQyxxQkFEZDtBQUVJLDZCQUFPLEVBQUVnQixZQUZiO0FBR0ksa0NBQVksRUFBQyxlQUhqQjtBQUlJLHdCQUFFLEVBQUMsZ0JBSlA7QUFLSSxrQ0FBWSxFQUFFLElBTGxCO0FBTUksaUNBQVcsRUFBQyxhQU5oQjtBQU9JLDJCQUFLLEVBQUVkLGNBUFg7QUFRSSxvQ0FBYyxFQUFFQSxjQVJwQjtBQVNJLDhCQUFRLEVBQUUsa0JBQUNrQixDQUFEO0FBQUEsK0JBQU9qQixpQkFBaUIsQ0FBQ2lCLENBQUQsQ0FBeEI7QUFBQSx1QkFUZDtBQVVJLDhCQUFRLEVBQUUsa0JBQUNBLENBQUQ7QUFBQSwrQkFBT2pCLGlCQUFpQixDQUFDaUIsQ0FBRCxDQUF4QjtBQUFBO0FBVmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQWFJO0FBQU0sK0JBQVMsRUFBQyxtQkFBaEI7QUFBQSw2Q0FBb0M7QUFBRyxpQ0FBTTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosRUFpQktWLFNBQVMsSUFBSVIsY0FBYyxDQUFDNEIsTUFBZixJQUF5QixDQUF0QyxpQkFDRztBQUFNLHNCQUFFLEVBQUMsYUFBVDtBQUF1Qiw2QkFBUyxFQUFDLGFBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWxCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFzQkk7QUFBSywyQkFBUyxFQUFDLHFCQUFmO0FBQUEsMENBQ0k7QUFBTyw2QkFBUyxFQUFDLFlBQWpCO0FBQUEsZ0VBQThDO0FBQU0sK0JBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLGVBRUk7QUFBTyx3QkFBSSxFQUFDLE1BQVo7QUFBbUIsNkJBQVMsRUFBRSxtQkFBb0JwQixTQUFTLElBQUksQ0FBQ04sT0FBZixHQUEwQixZQUExQixHQUF5QyxFQUE1RCxDQUE5QjtBQUNBLHdCQUFJLEVBQUMsU0FETDtBQUNlLHlCQUFLLEVBQUVBLE9BRHRCO0FBQytCLCtCQUFXLEVBQUMsV0FEM0M7QUFDdUQsNEJBQVEsRUFBRSxrQkFBQ2dCLENBQUQ7QUFBQSw2QkFBT2YsVUFBVSxDQUFDZSxDQUFDLENBQUNFLE1BQUYsQ0FBU1QsS0FBVixDQUFqQjtBQUFBO0FBRGpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosRUFJS0gsU0FBUyxJQUFJLENBQUNOLE9BQWQsaUJBQ0c7QUFBTSxzQkFBRSxFQUFDLGFBQVQ7QUFBdUIsNkJBQVMsRUFBQyx3QkFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQXRCSixlQThCSTtBQUFLLDJCQUFTLEVBQUMscUJBQWY7QUFBQSwwQ0FDSTtBQUFPLDZCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosZUFFSTtBQUFLLDZCQUFTLEVBQUMsb0JBQWY7QUFBQSw0Q0FDSSw4REFBQyxtRUFBRDtBQUNJLDZCQUFPLEVBQUVVLGtCQURiO0FBRUksa0NBQVksRUFBQyxPQUZqQjtBQUdJLGtDQUFZLEVBQUUsSUFIbEI7QUFJSSxpQ0FBVyxFQUFDLGFBSmhCO0FBS0ksMkJBQUssRUFBRVIsY0FMWDtBQU1JLHdCQUFFLEVBQUMsZ0JBTlA7QUFPSSxvQ0FBYyxFQUFFQSxjQVBwQjtBQVFJLDhCQUFRLEVBQUUsa0JBQUNjLENBQUQ7QUFBQSwrQkFBT2IsaUJBQWlCLENBQUNhLENBQUQsQ0FBeEI7QUFBQSx1QkFSZDtBQVNJLDhCQUFRLEVBQUUsa0JBQUNBLENBQUQ7QUFBQSwrQkFBT2IsaUJBQWlCLENBQUNhLENBQUQsQ0FBeEI7QUFBQTtBQVRkO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFZSTtBQUFNLCtCQUFTLEVBQUMsbUJBQWhCO0FBQUEsNkNBQW9DO0FBQUcsaUNBQU07QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkE5Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBESixlQW9HSTtBQUFLLHlCQUFTLEVBQUMscUJBQWY7QUFBQSx3Q0FDSTtBQUFPLDJCQUFTLEVBQUMsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFFSTtBQUFBLDBDQUNJO0FBQUssNkJBQU0sd0NBQVg7QUFBQSw0Q0FDSTtBQUFPLCtCQUFNLGtCQUFiO0FBQWdDLDhCQUFRLEVBQUVELFlBQTFDO0FBQXdELDBCQUFJLEVBQUMsVUFBN0Q7QUFBd0Usd0JBQUUsRUFBQyxpQkFBM0U7QUFBNkYsMkJBQUssRUFBQyxPQUFuRztBQUEyRyw2QkFBTyxFQUFFWCxVQUFVLENBQUMyQixJQUFYLENBQWdCLFVBQUNDLEVBQUQ7QUFBQSwrQkFBUUEsRUFBRSxJQUFJLE9BQWQ7QUFBQSx1QkFBaEI7QUFBcEg7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFESixlQUVJO0FBQU8sK0JBQU0sa0JBQWI7QUFBZ0MsNkJBQUksaUJBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixlQUtJO0FBQUssNkJBQU0sd0NBQVg7QUFBQSw0Q0FDSTtBQUFPLCtCQUFNLGtCQUFiO0FBQWdDLDhCQUFRLEVBQUVqQixZQUExQztBQUF3RCwwQkFBSSxFQUFDLFVBQTdEO0FBQXdFLHdCQUFFLEVBQUMsaUJBQTNFO0FBQTZGLDJCQUFLLEVBQUMsUUFBbkc7QUFBNEcsNkJBQU8sRUFBRVgsVUFBVSxDQUFDMkIsSUFBWCxDQUFnQixVQUFDQyxFQUFEO0FBQUEsK0JBQVFBLEVBQUUsSUFBSSxRQUFkO0FBQUEsdUJBQWhCO0FBQXJIO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosZUFFSTtBQUFPLCtCQUFNLGtCQUFiO0FBQWdDLDZCQUFJLGlCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTEosZUFTSTtBQUFLLDZCQUFNLHdDQUFYO0FBQUEsNENBQ0k7QUFBTywrQkFBTSxrQkFBYjtBQUFnQyw4QkFBUSxFQUFFakIsWUFBMUM7QUFBd0QsMEJBQUksRUFBQyxVQUE3RDtBQUF3RSx3QkFBRSxFQUFDLGlCQUEzRTtBQUE2RiwyQkFBSyxFQUFDLFlBQW5HO0FBQWdILDZCQUFPLEVBQUVYLFVBQVUsQ0FBQzJCLElBQVgsQ0FBZ0IsVUFBQ0MsRUFBRDtBQUFBLCtCQUFRQSxFQUFFLElBQUksWUFBZDtBQUFBLHVCQUFoQjtBQUF6SDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURKLGVBRUk7QUFBTywrQkFBTSxrQkFBYjtBQUFnQyw2QkFBSSxpQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQXVISTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDSTtBQUFRLHlCQUFTLEVBQUMsa0JBQWxCO0FBQXFDLHVCQUFPLEVBQUVSLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBUSx5QkFBUyxFQUFDLFlBQWxCO0FBQ0ksdUJBQU8sRUFBRSxpQkFBQ1IsQ0FBRCxFQUFPO0FBQ1pBLG1CQUFDLENBQUNpQixhQUFGLENBQWdCQyxJQUFoQjtBQUNBVCw0QkFBVTtBQUNiLGlCQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2SEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBLGtCQURKO0FBcUpIOztHQXZNdUJwQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjY2NlZWQ3MTU2N2ZjNTc2MDlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNdWx0aXNlbGVjdCB9IGZyb20gXCJtdWx0aXNlbGVjdC1yZWFjdC1kcm9wZG93blwiO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3QnOyAgXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9kZXYtYnV5ZXItYXBpLmN4b3NwYWNlLmNvL3B1YmxpYy9hbGwvaW5kdXN0cmllcycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5vdEZvdW5kOiB0cnVlLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgZGF0YSB9LCBcbiAgICB9XG59XG4gICAgXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gICAgY29uc3QgW3Byb2R1Y3RJbWFnZSwgc2V0UHJvZHVjdEltYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcHJvZHVjdE5hbWUsIHNldFByb2R1Y3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbcHJvZHVjdERlc2NyaXB0aW9uLCBzZXRQcm9kdWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFt0YXJnZXRJbmR1c3RyeSwgc2V0VGFyZ2V0SW5kdXN0cnldID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFt3ZWJzaXRlLCBzZXRXZWJzaXRlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2VydGlmaWNhdGlvbnMsIHNldENlcnRpZmljYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbZGVwbG95bWVudCwgc2V0RGVwbG95bWVudF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbY2VydGlmaWNhdGVPcHRpb25zLCBzZXRDZXJ0aWZpY2F0ZU9wdGlvbnNdID0gdXNlU3RhdGUoXG4gICAgICAgIFtcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiVGVhbSBMZWFkIENlcnRpZmljYXRlXCIgLCB2YWx1ZTogXCJ0ZWFtTGVhZENlcnRpZmljYXRlXCJ9LCB7IGxhYmVsOiBcIkJ1c2luZXNzIENlcnRpZmljYXRlXCIgLCB2YWx1ZTogXCJidXNpbmVzc0NlcnRpZmljYXRlXCJ9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCJTYWxlcyBDZXJ0aWZpY2F0ZVwiICwgdmFsdWU6IFwic2FsZXNDZXJ0aWZpY2F0ZVwifSwgeyBsYWJlbDogXCJUYWxlbnQgQ2VydGlmaWNhdGVcIiAsIHZhbHVlOiBcInRhbGVudENlcnRpZmljYXRlXCJ9LFxuICAgICAgICAgICAgeyBsYWJlbDogXCJHbG9iYWwgQ2VydGlmaWNhdGVcIiAsIHZhbHVlOiBcImdsb2JhbENlcnRpZmljYXRlXCJ9LCB7IGxhYmVsOiBcIm1lbWJlcnNoaXAgQ2VydGlmaWNhdGVcIiAsIHZhbHVlOiBcIm1lbWJlcnNoaXBDZXJ0aWZpY2F0ZVwifVxuICAgICAgICBdXG4gICAgKTtcbiAgICBjb25zdCBjaGVja2JveExpc3QgPSBwcm9wcy5kYXRhLmRhdGEuaW5kdXN0cmllcztcbiAgICBcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgY29uc3QgY2hlY2tlZFZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciBiZWZvcmVWYWx1ZSA9IGRlcGxveW1lbnQuaW5jbHVkZXMoY2hlY2tlZFZhbHVlKTtcbiAgICAgICAgaWYoY2hlY2tlZCAmJiAhYmVmb3JlVmFsdWUpIHtcbiAgICAgICAgICAgIHNldERlcGxveW1lbnQoWy4uLmRlcGxveW1lbnQsIGNoZWNrZWRWYWx1ZV0pXG4gICAgICAgIH0gZWxzZSBpZighY2hlY2tlZCAmJiBiZWZvcmVWYWx1ZSkge1xuICAgICAgICAgICAgc2V0RGVwbG95bWVudChkZXBsb3ltZW50LmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gY2hlY2tlZFZhbHVlKSk7ICAgICAgICBcbiAgICAgICAgfSAgICAgICAgXG4gICAgfTtcblxuICAgIGNvbnN0IG9uQ2FuY2VsID0gKCkgPT4geyAgICBcbiAgICAgICAgc2V0UHJvZHVjdEltYWdlKCcnKTtcbiAgICAgICAgc2V0UHJvZHVjdE5hbWUoJycpO1xuICAgICAgICBzZXRQcm9kdWN0RGVzY3JpcHRpb24oJycpO1xuICAgICAgICBzZXRUYXJnZXRJbmR1c3RyeShbXSk7XG4gICAgICAgIHNldFdlYnNpdGUoJycpO1xuICAgICAgICBzZXRDZXJ0aWZpY2F0aW9ucyhbXSk7XG4gICAgICAgIHNldERlcGxveW1lbnQoW10pO1xuICAgICAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG9uQ29udGludWUgPSAoKSA9PiB7XG4gICAgICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgICAgICAgaWYgKCFwcm9kdWN0TmFtZSB8fCAhcHJvZHVjdERlc2NyaXB0aW9uIHx8ICF3ZWJzaXRlIHx8IHRhcmdldEluZHVzdHJ5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbkNhbmNlbCgpO1xuICAgICAgICAgICAgVG9hc3QoJ3N1Y2Nlc3MnLCBcIlByb2R1Y3QgRGV0YWlscyBBZGRlZCBTdWNjZXNzZnVsbHlcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkN4b3BpY2tzIHwgUHJvZHVjdDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgY29sLW1kLTEyIGNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInBhZ2VfaGVhZGluZ1wiPlByb2R1Y3QgRGV0YWlsczwvaDI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmV5X2JveF9iZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgcC0wIG15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LTAgZm9ybV9maWVsZHNfZ3JleV9iZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtLTAgYm9yX2J0bV9zcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZF9waG90b19iZyBjb2wtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RJbWFnZSA9PSAnJyA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZmlsZS1pbWFnZS1vIGZhLTN4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdEltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNyB0ZXh0LW1kLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1cGxvYWQtcHJvZmlsZS1sYWJlbFwiPlVwbG9hZCB5b3VyIExvZ288L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ibG9jayB0by1jaG9vc2UtYS1maWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImFjdHVhbC1idG5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9kdWN0SW1hZ2UoVVJMLmNyZWF0ZU9iamVjdFVSTChlLnRhcmdldC5maWxlc1swXSkpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFjdHVhbC1idG5cIiBjbGFzc05hbWU9XCJibHVlX2xpbmtcIj5DbGljayBoZXJlIDwvbGFiZWw+dG8gY2hvb3NlIGEgZmlsZTxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJvZHVjdCBOYW1lIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkLXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIFwiICsgKChzdWJtaXR0ZWQgJiYgIXByb2R1Y3ROYW1lKSA/IFwiaXMtaW52YWxpZFwiIDogXCJcIil9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcm9kdWN0TmFtZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9kdWN0TmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0dGVkICYmICFwcm9kdWN0TmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvciBpbnZhbGlkLWZlZWRiYWNrXCIgPlByb2R1Y3QgTmFtZSBpcyBSZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Qcm9kdWN0IERlc2NyaXB0aW9uIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkLXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBcIiArICgoc3VibWl0dGVkICYmICFwcm9kdWN0RGVzY3JpcHRpb24pID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiKX0gbmFtZT1cInByb2R1Y3REZXNjcmlwdGlvblwiIHZhbHVlPXtwcm9kdWN0RGVzY3JpcHRpb259IHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9kdWN0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfSByb3dzPVwiOFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdHRlZCAmJiAhcHJvZHVjdERlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbC1lcnJvclwiIGNsYXNzTmFtZT1cImVycm9yIGludmFsaWQtZmVlZGJhY2tcIiA+UHJvZHVjdCBEZXNjcmlwdGlvbiBpcyBSZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Qcm9kdWN0IFRhcmdldCBJbmR1c3RyeSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZC1yZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aV9zZWxfZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1zaW5nbGUtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NoZWNrYm94TGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT1cImluZHVzdHJ5X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXJnZXRJbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hlY2tib3g9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBoZXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXJnZXRJbmR1c3RyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXt0YXJnZXRJbmR1c3RyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoZSkgPT4gc2V0VGFyZ2V0SW5kdXN0cnkoZSkgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoZSkgPT4gc2V0VGFyZ2V0SW5kdXN0cnkoZSkgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dfc2VsZWN0X2Ryb3BcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXR0ZWQgJiYgdGFyZ2V0SW5kdXN0cnkubGVuZ3RoID09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIiA+UHJvZHVjdCBUYXJnZXQgSW5kdXN0cnkgaXMgUmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Qcm9kdWN0IFdlYnNpdGUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWQtcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgXCIgKyAoKHN1Ym1pdHRlZCAmJiAhd2Vic2l0ZSkgPyBcImlzLWludmFsaWRcIiA6IFwiXCIpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwid2Vic2l0ZVwiIHZhbHVlPXt3ZWJzaXRlfSBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2Vic2l0ZShlLnRhcmdldC52YWx1ZSl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0dGVkICYmICF3ZWJzaXRlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbC1lcnJvclwiIGNsYXNzTmFtZT1cImVycm9yIGludmFsaWQtZmVlZGJhY2tcIj5Qcm9kdWN0IFdlYnNpdGUgaXMgUmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Qcm9kdWN0IENlcnRpZmljYXRpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bHRpX3NlbF9kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NlcnRpZmljYXRlT3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlWYWx1ZT1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGVja2JveD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NlcnRpZmljYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0YXJnZXRJbmR1c3RyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17Y2VydGlmaWNhdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHNldENlcnRpZmljYXRpb25zKGUpIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17KGUpID0+IHNldENlcnRpZmljYXRpb25zKGUpIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93X3NlbGVjdF9kcm9wXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByb2R1Y3QgRGVwbG95bWVudDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lIG1lLTUgcHMtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveDFcIiB2YWx1ZT1cImNsb3VkXCIgY2hlY2tlZD17ZGVwbG95bWVudC5maW5kKChjaCkgPT4gY2ggPT0gXCJjbG91ZFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImlubGluZUNoZWNrYm94MVwiPkNsb3VkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZSBtZS01IHBzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaW5saW5lQ2hlY2tib3gyXCIgdmFsdWU9XCJob3N0ZWRcIiBjaGVja2VkPXtkZXBsb3ltZW50LmZpbmQoKGNoKSA9PiBjaCA9PSBcImhvc3RlZFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImlubGluZUNoZWNrYm94MlwiPkhvc3RlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmUgbWUtNSBwcy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlubGluZUNoZWNrYm94M1wiIHZhbHVlPVwic2VsZkhvc3RlZFwiIGNoZWNrZWQ9e2RlcGxveW1lbnQuZmluZCgoY2gpID0+IGNoID09IFwic2VsZkhvc3RlZFwiKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiaW5saW5lQ2hlY2tib3gzXCI+U2VsZiBIb3N0ZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGJ1dHRvbnMtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJncmV5X2J0bl9iZyBteC0zXCIgb25DbGljaz17b25DYW5jZWx9PiBDYW5jZWwgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwieWVsbG93LWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29udGludWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250aW51ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9