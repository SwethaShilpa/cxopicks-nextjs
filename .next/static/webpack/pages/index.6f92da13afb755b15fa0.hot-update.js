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
      (0,_components_toast__WEBPACK_IMPORTED_MODULE_5__.default)('success', "Submitted Successfully");
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
                      checked: deployment.find(function (ch) {
                        return ch == "selfHosted";
                      }),
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox3",
                      value: "selfHosted"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwidXNlU3RhdGUiLCJwcm9kdWN0SW1hZ2UiLCJzZXRQcm9kdWN0SW1hZ2UiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwidGFyZ2V0SW5kdXN0cnkiLCJzZXRUYXJnZXRJbmR1c3RyeSIsIndlYnNpdGUiLCJzZXRXZWJzaXRlIiwiY2VydGlmaWNhdGlvbnMiLCJzZXRDZXJ0aWZpY2F0aW9ucyIsImRlcGxveW1lbnQiLCJzZXREZXBsb3ltZW50Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwibGFiZWwiLCJ2YWx1ZSIsImNlcnRpZmljYXRlT3B0aW9ucyIsInNldENlcnRpZmljYXRlT3B0aW9ucyIsImNoZWNrYm94TGlzdCIsImRhdGEiLCJpbmR1c3RyaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNoZWNrZWQiLCJ0YXJnZXQiLCJjaGVja2VkVmFsdWUiLCJiZWZvcmVWYWx1ZSIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsIm9uQ2FuY2VsIiwib25Db250aW51ZSIsImxlbmd0aCIsIlRvYXN0IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJmaW5kIiwiY2giLCJjdXJyZW50VGFyZ2V0IiwiYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFlZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQTs7QUFBQSxrQkFDUUMsK0NBQVEsQ0FBQyxFQUFELENBRGhCO0FBQUEsTUFDekJDLFlBRHlCO0FBQUEsTUFDWEMsZUFEVzs7QUFBQSxtQkFFTUYsK0NBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUV6QkcsV0FGeUI7QUFBQSxNQUVaQyxjQUZZOztBQUFB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O0FBQUEsd0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQXBHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUF1SEk7QUFBSyx1QkFBUyxFQUFDLHNCQUFmO0FBQUEsc0NBQ0k7QUFBUSx5QkFBUyxFQUFDLGtCQUFsQjtBQUFxQyx1QkFBTyxFQUFFUyxRQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJO0FBQVEseUJBQVMsRUFBQyxZQUFsQjtBQUNJLHVCQUFPLEVBQUUsaUJBQUNSLENBQUQsRUFBTztBQUNaQSxtQkFBQyxDQUFDaUIsYUFBRixDQUFnQkMsSUFBaEI7QUFDQVQsNEJBQVU7QUFDYixpQkFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdkhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQSxrQkFESjtBQXFKSDs7R0F2TXVCcEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZjkyZGExM2FmYjc1NWIxNWZhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTXVsdGlzZWxlY3QgfSBmcm9tIFwibXVsdGlzZWxlY3QtcmVhY3QtZHJvcGRvd25cIjtcbmltcG9ydCBUb2FzdCBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0JzsgIFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZGV2LWJ1eWVyLWFwaS5jeG9zcGFjZS5jby9wdWJsaWMvYWxsL2luZHVzdHJpZXMnKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IGRhdGEgfSwgXG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgIGNvbnN0IFtwcm9kdWN0SW1hZ2UsIHNldFByb2R1Y3RJbWFnZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3Byb2R1Y3REZXNjcmlwdGlvbiwgc2V0UHJvZHVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbdGFyZ2V0SW5kdXN0cnksIHNldFRhcmdldEluZHVzdHJ5XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbd2Vic2l0ZSwgc2V0V2Vic2l0ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NlcnRpZmljYXRpb25zLCBzZXRDZXJ0aWZpY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2RlcGxveW1lbnQsIHNldERlcGxveW1lbnRdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2NlcnRpZmljYXRlT3B0aW9ucywgc2V0Q2VydGlmaWNhdGVPcHRpb25zXSA9IHVzZVN0YXRlKFxuICAgICAgICBbXG4gICAgICAgICAgICB7IGxhYmVsOiBcIlRlYW0gTGVhZCBDZXJ0aWZpY2F0ZVwiICwgdmFsdWU6IFwidGVhbUxlYWRDZXJ0aWZpY2F0ZVwifSwgeyBsYWJlbDogXCJCdXNpbmVzcyBDZXJ0aWZpY2F0ZVwiICwgdmFsdWU6IFwiYnVzaW5lc3NDZXJ0aWZpY2F0ZVwifSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiU2FsZXMgQ2VydGlmaWNhdGVcIiAsIHZhbHVlOiBcInNhbGVzQ2VydGlmaWNhdGVcIn0sIHsgbGFiZWw6IFwiVGFsZW50IENlcnRpZmljYXRlXCIgLCB2YWx1ZTogXCJ0YWxlbnRDZXJ0aWZpY2F0ZVwifSxcbiAgICAgICAgICAgIHsgbGFiZWw6IFwiR2xvYmFsIENlcnRpZmljYXRlXCIgLCB2YWx1ZTogXCJnbG9iYWxDZXJ0aWZpY2F0ZVwifSwgeyBsYWJlbDogXCJtZW1iZXJzaGlwIENlcnRpZmljYXRlXCIgLCB2YWx1ZTogXCJtZW1iZXJzaGlwQ2VydGlmaWNhdGVcIn1cbiAgICAgICAgXVxuICAgICk7XG4gICAgY29uc3QgY2hlY2tib3hMaXN0ID0gcHJvcHMuZGF0YS5kYXRhLmluZHVzdHJpZXM7XG4gICAgXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgIGNvbnN0IGNoZWNrZWRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB2YXIgYmVmb3JlVmFsdWUgPSBkZXBsb3ltZW50LmluY2x1ZGVzKGNoZWNrZWRWYWx1ZSk7XG4gICAgICAgIGlmKGNoZWNrZWQgJiYgIWJlZm9yZVZhbHVlKSB7XG4gICAgICAgICAgICBzZXREZXBsb3ltZW50KFsuLi5kZXBsb3ltZW50LCBjaGVja2VkVmFsdWVdKVxuICAgICAgICB9IGVsc2UgaWYoIWNoZWNrZWQgJiYgYmVmb3JlVmFsdWUpIHtcbiAgICAgICAgICAgIHNldERlcGxveW1lbnQoZGVwbG95bWVudC5maWx0ZXIoaXRlbSA9PiBpdGVtICE9IGNoZWNrZWRWYWx1ZSkpOyAgICAgICAgXG4gICAgICAgIH0gICAgICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBvbkNhbmNlbCA9ICgpID0+IHsgICAgXG4gICAgICAgIHNldFByb2R1Y3RJbWFnZSgnJyk7XG4gICAgICAgIHNldFByb2R1Y3ROYW1lKCcnKTtcbiAgICAgICAgc2V0UHJvZHVjdERlc2NyaXB0aW9uKCcnKTtcbiAgICAgICAgc2V0VGFyZ2V0SW5kdXN0cnkoW10pO1xuICAgICAgICBzZXRXZWJzaXRlKCcnKTtcbiAgICAgICAgc2V0Q2VydGlmaWNhdGlvbnMoW10pO1xuICAgICAgICBzZXREZXBsb3ltZW50KFtdKTtcbiAgICAgICAgc2V0U3VibWl0dGVkKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkNvbnRpbnVlID0gKCkgPT4ge1xuICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgICAgIGlmICghcHJvZHVjdE5hbWUgfHwgIXByb2R1Y3REZXNjcmlwdGlvbiB8fCAhd2Vic2l0ZSB8fCB0YXJnZXRJbmR1c3RyeS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DYW5jZWwoKTtcbiAgICAgICAgICAgIFRvYXN0KCdzdWNjZXNzJywgXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5DeG9waWNrcyB8IFByb2R1Y3Q8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIGNvbC1tZC0xMiBjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlX2hlYWRpbmdcIj5Qcm9kdWN0IERldGFpbHM8L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JleV9ib3hfYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IHAtMCBteS00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC0wIGZvcm1fZmllbGRzX2dyZXlfYmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wIGJvcl9idG1fc3BhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRfcGhvdG9fYmcgY29sLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0SW1hZ2UgPT0gJycgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZpbGUtaW1hZ2UtbyBmYS0zeFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIFBpY3R1cmVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgdGV4dC1tZC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXBsb2FkLXByb2ZpbGUtbGFiZWxcIj5VcGxvYWQgeW91ciBMb2dvPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtYmxvY2sgdG8tY2hvb3NlLWEtZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY3R1YWwtYnRuXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZHVjdEltYWdlKFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhY3R1YWwtYnRuXCIgY2xhc3NOYW1lPVwiYmx1ZV9saW5rXCI+Q2xpY2sgaGVyZSA8L2xhYmVsPnRvIGNob29zZSBhIGZpbGU8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByb2R1Y3QgTmFtZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZC1yZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBcIiArICgoc3VibWl0dGVkICYmICFwcm9kdWN0TmFtZSkgPyBcImlzLWludmFsaWRcIiA6IFwiXCIpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdE5hbWVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZHVjdE5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9kdWN0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdHRlZCAmJiAhcHJvZHVjdE5hbWUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3IgaW52YWxpZC1mZWVkYmFja1wiID5Qcm9kdWN0IE5hbWUgaXMgUmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJvZHVjdCBEZXNjcmlwdGlvbiA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZC1yZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgXCIgKyAoKHN1Ym1pdHRlZCAmJiAhcHJvZHVjdERlc2NyaXB0aW9uKSA/IFwiaXMtaW52YWxpZFwiIDogXCJcIil9IG5hbWU9XCJwcm9kdWN0RGVzY3JpcHRpb25cIiB2YWx1ZT17cHJvZHVjdERlc2NyaXB0aW9ufSBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZHVjdERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0gcm93cz1cIjhcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXR0ZWQgJiYgIXByb2R1Y3REZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvciBpbnZhbGlkLWZlZWRiYWNrXCIgPlByb2R1Y3QgRGVzY3JpcHRpb24gaXMgUmVxdWlyZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJvZHVjdCBUYXJnZXQgSW5kdXN0cnkgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWQtcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlfc2VsX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFzaWMtc2luZ2xlLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjaGVja2JveExpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU9XCJpbmR1c3RyeV9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGFyZ2V0SW5kdXN0cnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoZWNrYm94PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGFyZ2V0SW5kdXN0cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFZhbHVlcz17dGFyZ2V0SW5kdXN0cnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGUpID0+IHNldFRhcmdldEluZHVzdHJ5KGUpIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZT17KGUpID0+IHNldFRhcmdldEluZHVzdHJ5KGUpIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFycm93X3NlbGVjdF9kcm9wXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1kb3duXCI+PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0dGVkICYmIHRhcmdldEluZHVzdHJ5Lmxlbmd0aCA9PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbC1lcnJvclwiIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCIgPlByb2R1Y3QgVGFyZ2V0IEluZHVzdHJ5IGlzIFJlcXVpcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJvZHVjdCBXZWJzaXRlIDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkLXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIFwiICsgKChzdWJtaXR0ZWQgJiYgIXdlYnNpdGUpID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIndlYnNpdGVcIiB2YWx1ZT17d2Vic2l0ZX0gcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBvbkNoYW5nZT17KGUpID0+IHNldFdlYnNpdGUoZS50YXJnZXQudmFsdWUpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdHRlZCAmJiAhd2Vic2l0ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzc05hbWU9XCJlcnJvciBpbnZhbGlkLWZlZWRiYWNrXCI+UHJvZHVjdCBXZWJzaXRlIGlzIFJlcXVpcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJvZHVjdCBDZXJ0aWZpY2F0aW9uczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdWx0aV9zZWxfZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE11bHRpc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjZXJ0aWZpY2F0ZU9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VmFsdWU9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q2hlY2tib3g9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBoZXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjZXJ0aWZpY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGFyZ2V0SW5kdXN0cnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM9e2NlcnRpZmljYXRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiBzZXRDZXJ0aWZpY2F0aW9ucyhlKSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9eyhlKSA9PiBzZXRDZXJ0aWZpY2F0aW9ucyhlKSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd19zZWxlY3RfZHJvcFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Qcm9kdWN0IERlcGxveW1lbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZSBtZS01IHBzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiaW5saW5lQ2hlY2tib3gxXCIgdmFsdWU9XCJjbG91ZFwiIGNoZWNrZWQ9e2RlcGxveW1lbnQuZmluZCgoY2gpID0+IGNoID09IFwiY2xvdWRcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVDaGVja2JveDFcIj5DbG91ZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmUgbWUtNSBwcy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImlubGluZUNoZWNrYm94MlwiIHZhbHVlPVwiaG9zdGVkXCIgY2hlY2tlZD17ZGVwbG95bWVudC5maW5kKChjaCkgPT4gY2ggPT0gXCJob3N0ZWRcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVDaGVja2JveDJcIj5Ib3N0ZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lIG1lLTUgcHMtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgY2hlY2tlZD17ZGVwbG95bWVudC5maW5kKChjaCkgPT4gY2ggPT0gXCJzZWxmSG9zdGVkXCIpfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveDNcIiB2YWx1ZT1cInNlbGZIb3N0ZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVDaGVja2JveDNcIj5TZWxmIEhvc3RlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYnV0dG9ucy1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdyZXlfYnRuX2JnIG14LTNcIiBvbkNsaWNrPXtvbkNhbmNlbH0+IENhbmNlbCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ5ZWxsb3ctYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=