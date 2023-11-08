'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">OpenTelemetry Angular Interceptor</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"license.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>LICENSE\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"todo.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>TODO\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AwsXrayPropagatorModule.html\" data-type=\"entity-link\" >AwsXrayPropagatorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/B3PropagatorModule.html\" data-type=\"entity-link\" >B3PropagatorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CompositePropagatorModule.html\" data-type=\"entity-link\" >CompositePropagatorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ConsoleSpanExporterModule.html\" data-type=\"entity-link\" >ConsoleSpanExporterModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/JaegerHttpTracePropagatorModule.html\" data-type=\"entity-link\" >JaegerHttpTracePropagatorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NoopSpanExporterModule.html\" data-type=\"entity-link\" >NoopSpanExporterModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/NoopTextMapPropagatorModule.html\" data-type=\"entity-link\" >NoopTextMapPropagatorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OpenTelemetryInterceptorModule.html\" data-type=\"entity-link\" >OpenTelemetryInterceptorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OtelColExporterModule.html\" data-type=\"entity-link\" >OtelColExporterModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/OtelWebTracerModule.html\" data-type=\"entity-link\" >OtelWebTracerModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/W3CTraceContextPropagatorModule.html\" data-type=\"entity-link\" >W3CTraceContextPropagatorModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ZipkinExporterModule.html\" data-type=\"entity-link\" >ZipkinExporterModule</a>\n                            </li>\n                </ul>\n                </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AwsXrayPropagatorService.html\" data-type=\"entity-link\" >AwsXrayPropagatorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/B3PropagatorService.html\" data-type=\"entity-link\" >B3PropagatorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CompositePropagatorService.html\" data-type=\"entity-link\" >CompositePropagatorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ConsoleSpanExporterService.html\" data-type=\"entity-link\" >ConsoleSpanExporterService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/InstrumentationService.html\" data-type=\"entity-link\" >InstrumentationService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/JaegerHttpTracePropagatorService.html\" data-type=\"entity-link\" >JaegerHttpTracePropagatorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/NoopSpanExporterService.html\" data-type=\"entity-link\" >NoopSpanExporterService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/NoopTextMapPropagatorService.html\" data-type=\"entity-link\" >NoopTextMapPropagatorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/OtelcolExporterService.html\" data-type=\"entity-link\" >OtelcolExporterService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/W3CTraceContextPropagatorService.html\" data-type=\"entity-link\" >W3CTraceContextPropagatorService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ZipkinExporterService.html\" data-type=\"entity-link\" >ZipkinExporterService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interceptors-links"' : 'data-bs-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/OpenTelemetryHttpInterceptor.html\" data-type=\"entity-link\" >OpenTelemetryHttpInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/B3PropagatorConfig.html\" data-type=\"entity-link\" >B3PropagatorConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BatchSpanProcessorConfig.html\" data-type=\"entity-link\" >BatchSpanProcessorConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CommonCollectorConfig.html\" data-type=\"entity-link\" >CommonCollectorConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/CustomSpan.html\" data-type=\"entity-link\" >CustomSpan</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IExporter.html\" data-type=\"entity-link\" >IExporter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IgnoreUrlsConfig.html\" data-type=\"entity-link\" >IgnoreUrlsConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IPropagator.html\" data-type=\"entity-link\" >IPropagator</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/JaegerPropagatorConfig.html\" data-type=\"entity-link\" >JaegerPropagatorConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/OpenTelemetryConfig.html\" data-type=\"entity-link\" >OpenTelemetryConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/OtelCollectorConfig.html\" data-type=\"entity-link\" >OtelCollectorConfig</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ZipkinCollectorConfig.html\" data-type=\"entity-link\" >ZipkinCollectorConfig</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));