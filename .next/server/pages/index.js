(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/toast.js":
/*!*****************************!*\
  !*** ./components/toast.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Toast; }
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "sweetalert2");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const ToastAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  onOpen: toast => {
    toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
    toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
  }
});
function Toast(icon, title) {
  return ToastAlert.fire({
    target: document.getElementById("form-modal"),
    icon: `${icon}`,
    title: `${title}`
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multiselect-react-dropdown */ "multiselect-react-dropdown");
/* harmony import */ var multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/toast */ "./components/toast.js");


var _jsxFileName = "C:\\Users\\swethashilpa.ma\\Documents\\cxopicks-nextjs\\pages\\index.js";




async function getStaticProps() {
  const res = await fetch('https://dev-buyer-api.cxospace.co/public/all/industries');
  const data = await res.json();

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
}
function Home(props) {
  const {
    0: productImage,
    1: setProductImage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: productName,
    1: setProductName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: productDescription,
    1: setProductDescription
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: targetIndustry,
    1: setTargetIndustry
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: website,
    1: setWebsite
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: certifications,
    1: setCertifications
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: deployment,
    1: setDeployment
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: submitted,
    1: setSubmitted
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: certificateOptions,
    1: setCertificateOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
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
  }]);
  const checkboxList = props.data.data.industries;

  const handleChange = e => {
    const checked = e.target.checked;
    const checkedValue = e.target.value;
    var beforeValue = deployment.includes(checkedValue);

    if (checked && !beforeValue) {
      setDeployment([...deployment, checkedValue]);
    } else if (!checked && beforeValue) {
      setDeployment(deployment.filter(item => item != checkedValue));
    }
  };

  const onCancel = () => {
    setProductImage('');
    setProductName('');
    setProductDescription('');
    setTargetIndustry([]);
    setWebsite('');
    setCertifications([]);
    setDeployment([]);
    setSubmitted(false);
  };

  const onContinue = () => {
    setSubmitted(true);

    if (!productName || !productDescription || !website) {
      return;
    } else {
      onCancel();
      (0,_components_toast__WEBPACK_IMPORTED_MODULE_4__.default)('success', "Submitted Successfully");
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
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
                      onChange: e => setProductImage(URL.createObjectURL(e.target.files[0])),
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
                    onChange: e => setProductName(e.target.value)
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
                    onChange: e => setProductDescription(e.target.value),
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
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3__.Multiselect, {
                      className: "basic-single-select",
                      options: checkboxList,
                      displayValue: "industry_name",
                      id: "targetIndustry",
                      showCheckbox: true,
                      placeholder: "Select here",
                      value: targetIndustry,
                      selectedValues: targetIndustry,
                      onSelect: e => setTargetIndustry(e),
                      onRemove: e => setTargetIndustry(e)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 139,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "arrow_select_drop",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        class: "fas fa-chevron-down"
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
                    onChange: e => setWebsite(e.target.value)
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
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(multiselect_react_dropdown__WEBPACK_IMPORTED_MODULE_3__.Multiselect, {
                      options: certificateOptions,
                      displayValue: "label",
                      showCheckbox: true,
                      placeholder: "Select here",
                      value: certifications,
                      id: "targetIndustry",
                      selectedValues: certifications,
                      onSelect: e => setCertifications(e),
                      onRemove: e => setCertifications(e)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                      className: "arrow_select_drop",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                        class: "fas fa-chevron-down"
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
                    class: "form-check form-check-inline me-5 ps-0",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      class: "form-check-input",
                      checked: deployment.find(ch => ch == "cloud"),
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox1",
                      value: "cloud"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 187,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      class: "form-check-label",
                      for: "inlineCheckbox1",
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
                    class: "form-check form-check-inline me-5 ps-0",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      class: "form-check-input",
                      checked: deployment.find(ch => ch == "hosted"),
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox2",
                      value: "hosted"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 191,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      class: "form-check-label",
                      for: "inlineCheckbox2",
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
                    class: "form-check form-check-inline me-5 ps-0",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                      class: "form-check-input",
                      checked: deployment.find(ch => ch == "selfHosted"),
                      onChange: handleChange,
                      type: "checkbox",
                      id: "inlineCheckbox3",
                      value: "selfHosted"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 195,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
                      class: "form-check-label",
                      for: "inlineCheckbox3",
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
                onClick: e => {
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

/***/ }),

/***/ "multiselect-react-dropdown":
/*!*********************************************!*\
  !*** external "multiselect-react-dropdown" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("multiselect-react-dropdown");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "sweetalert2":
/*!******************************!*\
  !*** external "sweetalert2" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("sweetalert2");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jeG9waWNrcy1uZXh0anMvLi9jb21wb25lbnRzL3RvYXN0LmpzIiwid2VicGFjazovL2N4b3BpY2tzLW5leHRqcy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2N4b3BpY2tzLW5leHRqcy9leHRlcm5hbCBcIm11bHRpc2VsZWN0LXJlYWN0LWRyb3Bkb3duXCIiLCJ3ZWJwYWNrOi8vY3hvcGlja3MtbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY3hvcGlja3MtbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9jeG9waWNrcy1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9jeG9waWNrcy1uZXh0anMvZXh0ZXJuYWwgXCJzd2VldGFsZXJ0MlwiIl0sIm5hbWVzIjpbIlRvYXN0QWxlcnQiLCJTd2FsIiwidG9hc3QiLCJwb3NpdGlvbiIsInNob3dDb25maXJtQnV0dG9uIiwidGltZXIiLCJvbk9wZW4iLCJhZGRFdmVudExpc3RlbmVyIiwiVG9hc3QiLCJpY29uIiwidGl0bGUiLCJmaXJlIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm5vdEZvdW5kIiwicHJvcHMiLCJIb21lIiwicHJvZHVjdEltYWdlIiwic2V0UHJvZHVjdEltYWdlIiwidXNlU3RhdGUiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERlc2NyaXB0aW9uIiwic2V0UHJvZHVjdERlc2NyaXB0aW9uIiwidGFyZ2V0SW5kdXN0cnkiLCJzZXRUYXJnZXRJbmR1c3RyeSIsIndlYnNpdGUiLCJzZXRXZWJzaXRlIiwiY2VydGlmaWNhdGlvbnMiLCJzZXRDZXJ0aWZpY2F0aW9ucyIsImRlcGxveW1lbnQiLCJzZXREZXBsb3ltZW50Iiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiY2VydGlmaWNhdGVPcHRpb25zIiwic2V0Q2VydGlmaWNhdGVPcHRpb25zIiwibGFiZWwiLCJ2YWx1ZSIsImNoZWNrYm94TGlzdCIsImluZHVzdHJpZXMiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY2hlY2tlZCIsImNoZWNrZWRWYWx1ZSIsImJlZm9yZVZhbHVlIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpdGVtIiwib25DYW5jZWwiLCJvbkNvbnRpbnVlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZXMiLCJsZW5ndGgiLCJmaW5kIiwiY2giLCJjdXJyZW50VGFyZ2V0IiwiYmx1ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyx3REFBQSxDQUFXO0FBQzVCQyxPQUFLLEVBQUUsSUFEcUI7QUFFNUJDLFVBQVEsRUFBRSxTQUZrQjtBQUc1QkMsbUJBQWlCLEVBQUUsS0FIUztBQUk1QkMsT0FBSyxFQUFFLElBSnFCO0FBSzVCQyxRQUFNLEVBQUdKLEtBQUQsSUFBVztBQUNqQkEsU0FBSyxDQUFDSyxnQkFBTixDQUF1QixZQUF2QixFQUFxQ04sOERBQXJDO0FBQ0FDLFNBQUssQ0FBQ0ssZ0JBQU4sQ0FBdUIsWUFBdkIsRUFBcUNOLGdFQUFyQztBQUNEO0FBUjJCLENBQVgsQ0FBbkI7QUFXZSxTQUFTTyxLQUFULENBQWVDLElBQWYsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQ3pDLFNBQU9WLFVBQVUsQ0FBQ1csSUFBWCxDQUFnQjtBQUNyQkMsVUFBTSxFQUFFQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FEYTtBQUVyQkwsUUFBSSxFQUFHLEdBQUVBLElBQUssRUFGTztBQUdyQkMsU0FBSyxFQUFHLEdBQUVBLEtBQU07QUFISyxHQUFoQixDQUFQO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTtBQUVPLGVBQWVLLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTUMs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QUFBO0FBQUEsNEJBREosZUFFSTtBQUFPLDJCQUFLLEVBQUMsa0JBQWI7QUFBZ0MseUJBQUcsRUFBQyxpQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBcEdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQXVISTtBQUFLLHVCQUFTLEVBQUMsc0JBQWY7QUFBQSxzQ0FDSTtBQUFRLHlCQUFTLEVBQUMsa0JBQWxCO0FBQXFDLHVCQUFPLEVBQUVRLFFBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBUSx5QkFBUyxFQUFDLFlBQWxCO0FBQ0ksdUJBQU8sRUFBR1AsQ0FBRCxJQUFPO0FBQ1pBLG1CQUFDLENBQUNlLGFBQUYsQ0FBZ0JDLElBQWhCO0FBQ0FSLDRCQUFVO0FBQ2IsaUJBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXZISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUEsa0JBREo7QUFxSkgsQzs7Ozs7Ozs7Ozs7QUN6TkQsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3dhbCBmcm9tIFwic3dlZXRhbGVydDJcIjtcblxuY29uc3QgVG9hc3RBbGVydCA9IFN3YWwubWl4aW4oe1xuICB0b2FzdDogdHJ1ZSxcbiAgcG9zaXRpb246IFwidG9wLWVuZFwiLFxuICBzaG93Q29uZmlybUJ1dHRvbjogZmFsc2UsXG4gIHRpbWVyOiAzMDAwLFxuICBvbk9wZW46ICh0b2FzdCkgPT4ge1xuICAgIHRvYXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIFN3YWwuc3RvcFRpbWVyKTtcbiAgICB0b2FzdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBTd2FsLnJlc3VtZVRpbWVyKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2FzdChpY29uLCB0aXRsZSkge1xuICByZXR1cm4gVG9hc3RBbGVydC5maXJlKHtcbiAgICB0YXJnZXQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1tb2RhbFwiKSxcbiAgICBpY29uOiBgJHtpY29ufWAsXG4gICAgdGl0bGU6IGAke3RpdGxlfWAsXG4gIH0pO1xufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE11bHRpc2VsZWN0IH0gZnJvbSBcIm11bHRpc2VsZWN0LXJlYWN0LWRyb3Bkb3duXCI7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdCc7ICBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Rldi1idXllci1hcGkuY3hvc3BhY2UuY28vcHVibGljL2FsbC9pbmR1c3RyaWVzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBkYXRhIH0sIFxuICAgIH1cbn1cbiAgICBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgICBjb25zdCBbcHJvZHVjdEltYWdlLCBzZXRQcm9kdWN0SW1hZ2VdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwcm9kdWN0TmFtZSwgc2V0UHJvZHVjdE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtwcm9kdWN0RGVzY3JpcHRpb24sIHNldFByb2R1Y3REZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3RhcmdldEluZHVzdHJ5LCBzZXRUYXJnZXRJbmR1c3RyeV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3dlYnNpdGUsIHNldFdlYnNpdGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjZXJ0aWZpY2F0aW9ucywgc2V0Q2VydGlmaWNhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtkZXBsb3ltZW50LCBzZXREZXBsb3ltZW50XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtjZXJ0aWZpY2F0ZU9wdGlvbnMsIHNldENlcnRpZmljYXRlT3B0aW9uc10gPSB1c2VTdGF0ZShcbiAgICAgICAgW1xuICAgICAgICAgICAgeyBsYWJlbDogXCJUZWFtIExlYWQgQ2VydGlmaWNhdGVcIiAsIHZhbHVlOiBcInRlYW1MZWFkQ2VydGlmaWNhdGVcIn0sIHsgbGFiZWw6IFwiQnVzaW5lc3MgQ2VydGlmaWNhdGVcIiAsIHZhbHVlOiBcImJ1c2luZXNzQ2VydGlmaWNhdGVcIn0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIlNhbGVzIENlcnRpZmljYXRlXCIgLCB2YWx1ZTogXCJzYWxlc0NlcnRpZmljYXRlXCJ9LCB7IGxhYmVsOiBcIlRhbGVudCBDZXJ0aWZpY2F0ZVwiICwgdmFsdWU6IFwidGFsZW50Q2VydGlmaWNhdGVcIn0sXG4gICAgICAgICAgICB7IGxhYmVsOiBcIkdsb2JhbCBDZXJ0aWZpY2F0ZVwiICwgdmFsdWU6IFwiZ2xvYmFsQ2VydGlmaWNhdGVcIn0sIHsgbGFiZWw6IFwibWVtYmVyc2hpcCBDZXJ0aWZpY2F0ZVwiICwgdmFsdWU6IFwibWVtYmVyc2hpcENlcnRpZmljYXRlXCJ9XG4gICAgICAgIF1cbiAgICApO1xuICAgIGNvbnN0IGNoZWNrYm94TGlzdCA9IHByb3BzLmRhdGEuZGF0YS5pbmR1c3RyaWVzO1xuICAgIFxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICBjb25zdCBjaGVja2VkVmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdmFyIGJlZm9yZVZhbHVlID0gZGVwbG95bWVudC5pbmNsdWRlcyhjaGVja2VkVmFsdWUpO1xuICAgICAgICBpZihjaGVja2VkICYmICFiZWZvcmVWYWx1ZSkge1xuICAgICAgICAgICAgc2V0RGVwbG95bWVudChbLi4uZGVwbG95bWVudCwgY2hlY2tlZFZhbHVlXSlcbiAgICAgICAgfSBlbHNlIGlmKCFjaGVja2VkICYmIGJlZm9yZVZhbHVlKSB7XG4gICAgICAgICAgICBzZXREZXBsb3ltZW50KGRlcGxveW1lbnQuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPSBjaGVja2VkVmFsdWUpKTsgICAgICAgIFxuICAgICAgICB9ICAgICAgICBcbiAgICB9O1xuXG4gICAgY29uc3Qgb25DYW5jZWwgPSAoKSA9PiB7ICAgIFxuICAgICAgICBzZXRQcm9kdWN0SW1hZ2UoJycpO1xuICAgICAgICBzZXRQcm9kdWN0TmFtZSgnJyk7XG4gICAgICAgIHNldFByb2R1Y3REZXNjcmlwdGlvbignJyk7XG4gICAgICAgIHNldFRhcmdldEluZHVzdHJ5KFtdKTtcbiAgICAgICAgc2V0V2Vic2l0ZSgnJyk7XG4gICAgICAgIHNldENlcnRpZmljYXRpb25zKFtdKTtcbiAgICAgICAgc2V0RGVwbG95bWVudChbXSk7XG4gICAgICAgIHNldFN1Ym1pdHRlZChmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25Db250aW51ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgICAgICBpZiAoIXByb2R1Y3ROYW1lIHx8ICFwcm9kdWN0RGVzY3JpcHRpb24gfHwgIXdlYnNpdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9uQ2FuY2VsKCk7XG4gICAgICAgICAgICBUb2FzdCgnc3VjY2VzcycsIFwiU3VibWl0dGVkIFN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3hvcGlja3MgfCBQcm9kdWN0PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBjb2wtbWQtMTIgY29sLTEyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGFnZV9oZWFkaW5nXCI+UHJvZHVjdCBEZXRhaWxzPC9oMj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyZXlfYm94X2JnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBwLTAgbXktNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtMCBmb3JtX2ZpZWxkc19ncmV5X2JnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG0tMCBib3JfYnRtX3NwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXBsb2FkX3Bob3RvX2JnIGNvbC01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdEltYWdlID09ICcnID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWxlLWltYWdlLW8gZmEtM3hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZmlsZSBQaWN0dXJlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC03IHRleHQtbWQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVwbG9hZC1wcm9maWxlLWxhYmVsXCI+VXBsb2FkIHlvdXIgTG9nbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkLWJsb2NrIHRvLWNob29zZS1hLWZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWN0dWFsLWJ0blwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3RJbWFnZShVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKSl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWN0dWFsLWJ0blwiIGNsYXNzTmFtZT1cImJsdWVfbGlua1wiPkNsaWNrIGhlcmUgPC9sYWJlbD50byBjaG9vc2UgYSBmaWxlPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5Qcm9kdWN0IE5hbWUgPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWQtcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgXCIgKyAoKHN1Ym1pdHRlZCAmJiAhcHJvZHVjdE5hbWUpID8gXCJpcy1pbnZhbGlkXCIgOiBcIlwiKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByb2R1Y3ROYW1lXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2R1Y3ROYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZHVjdE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXR0ZWQgJiYgIXByb2R1Y3ROYW1lICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJlbWFpbC1lcnJvclwiIGNsYXNzTmFtZT1cImVycm9yIGludmFsaWQtZmVlZGJhY2tcIiA+UHJvZHVjdCBOYW1lIGlzIFJlcXVpcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByb2R1Y3QgRGVzY3JpcHRpb24gPHNwYW4gY2xhc3NOYW1lPVwicmVxdWlyZWQtcmVkXCI+Kjwvc3Bhbj48L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIFwiICsgKChzdWJtaXR0ZWQgJiYgIXByb2R1Y3REZXNjcmlwdGlvbikgPyBcImlzLWludmFsaWRcIiA6IFwiXCIpfSBuYW1lPVwicHJvZHVjdERlc2NyaXB0aW9uXCIgdmFsdWU9e3Byb2R1Y3REZXNjcmlwdGlvbn0gcGxhY2Vob2xkZXI9XCJUeXBlIGhlcmVcIiBvbkNoYW5nZT17KGUpID0+IHNldFByb2R1Y3REZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9IHJvd3M9XCI4XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3VibWl0dGVkICYmICFwcm9kdWN0RGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3IgaW52YWxpZC1mZWVkYmFja1wiID5Qcm9kdWN0IERlc2NyaXB0aW9uIGlzIFJlcXVpcmVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByb2R1Y3QgVGFyZ2V0IEluZHVzdHJ5IDxzcGFuIGNsYXNzTmFtZT1cInJlcXVpcmVkLXJlZFwiPio8L3NwYW4+PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11bHRpX3NlbF9kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TXVsdGlzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhc2ljLXNpbmdsZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2hlY2tib3hMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlPVwiaW5kdXN0cnlfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhcmdldEluZHVzdHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDaGVja2JveD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VsZWN0IGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RhcmdldEluZHVzdHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZXM9e3RhcmdldEluZHVzdHJ5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhlKSA9PiBzZXRUYXJnZXRJbmR1c3RyeShlKSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmU9eyhlKSA9PiBzZXRUYXJnZXRJbmR1c3RyeShlKSB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhcnJvd19zZWxlY3RfZHJvcFwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tZG93blwiPjwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N1Ym1pdHRlZCAmJiB0YXJnZXRJbmR1c3RyeS5sZW5ndGggPT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwiZW1haWwtZXJyb3JcIiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiID5Qcm9kdWN0IFRhcmdldCBJbmR1c3RyeSBpcyBSZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByb2R1Y3QgV2Vic2l0ZSA8c3BhbiBjbGFzc05hbWU9XCJyZXF1aXJlZC1yZWRcIj4qPC9zcGFuPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBcIiArICgoc3VibWl0dGVkICYmICF3ZWJzaXRlKSA/IFwiaXMtaW52YWxpZFwiIDogXCJcIil9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ3ZWJzaXRlXCIgdmFsdWU9e3dlYnNpdGV9IHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRXZWJzaXRlKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJtaXR0ZWQgJiYgIXdlYnNpdGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cImVtYWlsLWVycm9yXCIgY2xhc3NOYW1lPVwiZXJyb3IgaW52YWxpZC1mZWVkYmFja1wiPlByb2R1Y3QgV2Vic2l0ZSBpcyBSZXF1aXJlZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlByb2R1Y3QgQ2VydGlmaWNhdGlvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXVsdGlfc2VsX2Ryb3Bkb3duXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNdWx0aXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y2VydGlmaWNhdGVPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVZhbHVlPVwibGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NoZWNrYm94PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgaGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y2VydGlmaWNhdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInRhcmdldEluZHVzdHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVzPXtjZXJ0aWZpY2F0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoZSkgPT4gc2V0Q2VydGlmaWNhdGlvbnMoZSkgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlPXsoZSkgPT4gc2V0Q2VydGlmaWNhdGlvbnMoZSkgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXJyb3dfc2VsZWN0X2Ryb3BcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWRvd25cIj48L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UHJvZHVjdCBEZXBsb3ltZW50PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmUgbWUtNSBwcy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBjaGVja2VkPXtkZXBsb3ltZW50LmZpbmQoKGNoKSA9PiBjaCA9PSBcImNsb3VkXCIpfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveDFcIiB2YWx1ZT1cImNsb3VkXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImlubGluZUNoZWNrYm94MVwiPkNsb3VkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZSBtZS01IHBzLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGNoZWNrZWQ9e2RlcGxveW1lbnQuZmluZCgoY2gpID0+IGNoID09IFwiaG9zdGVkXCIpfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveDJcIiB2YWx1ZT1cImhvc3RlZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVDaGVja2JveDJcIj5Ib3N0ZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lIG1lLTUgcHMtMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgY2hlY2tlZD17ZGVwbG95bWVudC5maW5kKChjaCkgPT4gY2ggPT0gXCJzZWxmSG9zdGVkXCIpfSAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJpbmxpbmVDaGVja2JveDNcIiB2YWx1ZT1cInNlbGZIb3N0ZWRcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVDaGVja2JveDNcIj5TZWxmIEhvc3RlZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgYnV0dG9ucy1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImdyZXlfYnRuX2JnIG14LTNcIiBvbkNsaWNrPXtvbkNhbmNlbH0+IENhbmNlbCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ5ZWxsb3ctYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db250aW51ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRpbnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm11bHRpc2VsZWN0LXJlYWN0LWRyb3Bkb3duXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3ZWV0YWxlcnQyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9