(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    3394: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = (0, n(1).createContext)();
      t.default = a;
    },
    3395: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(10));
      function r(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? r(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var i = function (e) {
        return Object.keys(e).map(function (t, n) {
          return l(l({}, e[t]), {}, { name: t, index: n });
        });
      };
      t.default = i;
    },
    3396: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var a = function (e) {
        var t;
        switch (e) {
          case "date":
          case "datetime":
          case "time":
          case "timestamp":
            t = "date";
            break;
          case "integer":
          case "biginteger":
          case "decimal":
          case "float":
            t = "number";
            break;
          case "string":
          case "text":
            t = "text";
            break;
          case "":
            t = "relation";
            break;
          default:
            t = e;
        }
        return t;
      };
      t.default = a;
    },
    3397: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(7)),
        r = a(n(10)),
        l = a(n(1)),
        i = a(n(2)),
        d = n(8),
        u = n(6),
        c = n(9),
        f = n(46),
        s = a(n(112)),
        p = a(n(3404)),
        m = a(n(127)),
        _ = a(n(3405)),
        g = a(n(3398)),
        b = a(n(3410));
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, r.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function v(e) {
        var t = e.className,
          n = e.customRowComponent,
          a = e.items,
          r = e.addComponentToDZ,
          i = e.targetUid,
          h = e.mainTypeName,
          v = e.editTarget,
          C = e.isFromDynamicZone,
          w = e.isNestedInDZComponent,
          x = e.isMain,
          O = e.firstLoopComponentName,
          E = e.firstLoopComponentUid,
          k = e.secondLoopComponentName,
          T = e.secondLoopComponentUid,
          P = e.isSub,
          j = e.dzName,
          N = (0, u.useGlobalContext)().formatMessage,
          D = (0, m.default)(),
          L = D.isInDevelopmentMode,
          M = D.modifiedData,
          F = (0, p.default)().openModalAddField,
          U = function () {
            var e = (0, d.get)(M, ["components", E, "schema", "icon"], ""),
              t = (0, d.get)(M, ["components", E, "category"], null),
              n = (0, d.get)(M, ["components", E, "schema", "name"], null),
              a = (0, d.get)(M, ["components", T, "category"], null),
              o = (0, d.get)(M, ["components", T, "schema", "name"], null),
              r = (0, d.get)(M, ["components", T, "schema", "icon"], ""),
              l =
                "contentType" === v
                  ? (0, d.get)(M, ["contentType", "schema", "kind"], null)
                  : v,
              u = {
                header_label_1: h,
                header_icon_name_1: l,
                header_icon_isCustom_1: !1,
                header_info_category_1: null,
                header_info_name_1: null,
              },
              c = {
                header_label_2: O,
                header_icon_name_2: "component",
                header_icon_isCustom_2: !1,
                header_info_category_2: t,
                header_info_name_2: n,
              },
              f = {
                header_icon_name_3: "component",
                header_icon_isCustom_3: !1,
                header_info_category_3: a,
                header_info_name_3: o,
              },
              s = {
                header_icon_name_4: null,
                header_icon_isCustom_4: !1,
                header_info_category_4: a,
                header_info_name_4: o,
              };
            O &&
              (u = y(
                y({}, u),
                {},
                { header_icon_name_1: e, header_icon_isCustom_1: !0 }
              )),
              T &&
                ((u = y(
                  y({}, u),
                  {},
                  { header_icon_name_1: r, header_icon_isCustom_1: !0 }
                )),
                (f = y(y({}, f), {}, { header_label_3: k }))),
              (C || w) &&
                ((c = y(
                  y({}, c),
                  {},
                  {
                    header_label_2: j,
                    header_icon_name_2: "dynamiczone",
                    header_icon_isCustom_2: !1,
                    header_info_category_2: null,
                    header_info_name_2: null,
                  }
                )),
                (f = y(
                  y({}, f),
                  {},
                  {
                    header_icon_name_3: w ? "component" : null,
                    header_label_3: O,
                    header_info_category_3: t,
                    header_info_name_3: n,
                  }
                )),
                (s = y(y({}, s), {}, { header_label_4: k }))),
              F(v, i, u, c, f, s);
          },
          Z = {
            icon:
              !P &&
              l.default.createElement(f.Plus, {
                fill: "#007eff",
                width: "11px",
                height: "11px",
              }),
            color: "primary",
            label: L
              ? N({
                  id: P
                    ? "".concat(
                        s.default,
                        ".form.button.add.field.to.component"
                      )
                    : ""
                        .concat(s.default, ".form.button.add.field.to.")
                        .concat(
                          M.contentType
                            ? M.contentType.schema.kind
                            : v || "collectionType"
                        ),
                  defaultMessage: "Add another field",
                })
              : null,
            onClick: U,
          };
        return i
          ? l.default.createElement(
              l.default.Fragment,
              null,
              l.default.createElement(
                b.default,
                { className: t, isFromDynamicZone: C },
                l.default.createElement(
                  "table",
                  null,
                  l.default.createElement(
                    "tbody",
                    null,
                    a.map(function (e) {
                      var t = e.type,
                        a = n;
                      return l.default.createElement(
                        l.default.Fragment,
                        { key: e.name },
                        l.default.createElement(
                          a,
                          (0, o.default)({}, e, {
                            dzName: j,
                            isNestedInDZComponent: w,
                            targetUid: i,
                            mainTypeName: h,
                            editTarget: v,
                            firstLoopComponentName: O,
                            firstLoopComponentUid: E,
                            isFromDynamicZone: C,
                            secondLoopComponentName: k,
                            secondLoopComponentUid: T,
                          })
                        ),
                        "component" === t &&
                          l.default.createElement(
                            g.default,
                            (0, o.default)({}, e, {
                              customRowComponent: n,
                              targetUid: i,
                              dzName: j,
                              isNestedInDZComponent: C,
                              mainTypeName: h,
                              editTarget: v,
                              firstLoopComponentName: O,
                              firstLoopComponentUid: E,
                            })
                          ),
                        "dynamiczone" === t &&
                          l.default.createElement(
                            _.default,
                            (0, o.default)({}, e, {
                              customRowComponent: n,
                              addComponent: r,
                              targetUid: i,
                              mainTypeName: h,
                            })
                          )
                      );
                    })
                  )
                ),
                x &&
                  L &&
                  l.default.createElement(
                    u.ListButton,
                    null,
                    l.default.createElement(c.Button, Z)
                  ),
                !x &&
                  l.default.createElement(
                    u.ListButton,
                    null,
                    l.default.createElement(c.Button, Z)
                  )
              ),
              P &&
                l.default.createElement(
                  "div",
                  { className: "plus-icon", onClick: U },
                  L &&
                    l.default.createElement(f.Plus, {
                      fill: C ? "#007EFF" : "#b4b6ba",
                    })
                )
            )
          : null;
      }
      (v.defaultProps = {
        addComponentToDZ: function () {},
        className: null,
        customRowComponent: null,
        dzName: null,
        firstLoopComponentName: null,
        firstLoopComponentUid: null,
        isFromDynamicZone: !1,
        isNestedInDZComponent: !1,
        isMain: !1,
        isSub: !1,
        items: [],
        secondLoopComponentName: null,
        secondLoopComponentUid: null,
        targetUid: null,
      }),
        (v.propTypes = {
          addComponentToDZ: i.default.func,
          className: i.default.string,
          customRowComponent: i.default.func,
          dzName: i.default.string,
          editTarget: i.default.string.isRequired,
          firstLoopComponentName: i.default.string,
          firstLoopComponentUid: i.default.string,
          isFromDynamicZone: i.default.bool,
          isNestedInDZComponent: i.default.bool,
          isMain: i.default.bool,
          items: i.default.instanceOf(Array),
          mainTypeName: i.default.string.isRequired,
          secondLoopComponentName: i.default.string,
          secondLoopComponentUid: i.default.string,
          targetUid: i.default.string,
          isSub: i.default.bool,
        });
      var C = v;
      t.default = C;
    },
    3398: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(1)),
        r = n(8),
        l = a(n(2)),
        i = a(n(3397)),
        d = a(n(127)),
        u = a(n(3395)),
        c = a(n(3399));
      function f(e) {
        var t = e.customRowComponent,
          n = e.component,
          a = e.dzName,
          l = e.mainTypeName,
          f = e.isFromDynamicZone,
          s = e.isNestedInDZComponent,
          p = e.firstLoopComponentName,
          m = e.firstLoopComponentUid,
          _ = (0, d.default)().modifiedData,
          g = (0, r.get)(_, ["components", n], { schema: { attributes: {} } })
            .schema,
          b = g.name,
          h = g.attributes;
        return o.default.createElement(
          "tr",
          { className: "component-row" },
          o.default.createElement(
            c.default,
            { colSpan: 12, isChildOfDynamicZone: f },
            o.default.createElement(i.default, {
              customRowComponent: t,
              dzName: a,
              items: (0, u.default)(h),
              targetUid: n,
              mainTypeName: l,
              firstLoopComponentName: p || b,
              firstLoopComponentUid: m || n,
              editTarget: "components",
              isFromDynamicZone: f,
              isNestedInDZComponent: s,
              isSub: !0,
              secondLoopComponentName: p ? b : null,
              secondLoopComponentUid: m ? n : null,
            })
          )
        );
      }
      (f.defaultProps = {
        component: null,
        customRowComponent: null,
        dzName: null,
        firstLoopComponentName: null,
        firstLoopComponentUid: null,
        isFromDynamicZone: !1,
        isNestedInDZComponent: !1,
      }),
        (f.propTypes = {
          component: l.default.string,
          customRowComponent: l.default.func,
          dzName: l.default.string,
          firstLoopComponentName: l.default.string,
          firstLoopComponentUid: l.default.string,
          isFromDynamicZone: l.default.bool,
          isNestedInDZComponent: l.default.bool,
          mainTypeName: l.default.string.isRequired,
        });
      var s = f;
      t.default = s;
    },
    3399: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)).default.td(
          o ||
            (o = (0, r.default)([
              "\n  &::before {\n    content: '&';\n    width: 5px;\n    height: calc(100% - 15px);\n    position: absolute;\n    top: -7px;\n    left: 45px;\n    color: transparent;\n\n    ",
              "\n\n    border-radius: 3px;\n  }\n",
            ])),
          function (e) {
            var t = e.isFromDynamicZone;
            return e.isChildOfDynamicZone
              ? "\n          z-index: -1;\n          background-color: transparent !important;\n        "
              : t
              ? "\n          background-color: #AED4FB !important;\n        "
              : "\n        background-color: #f3f4f4 !important;\n      ";
          }
        );
      t.default = l;
    },
    3400: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(19)),
        r = a(n(7)),
        l = a(n(1)),
        i = n(8),
        d = a(n(112)),
        u = function (e, t, n, a) {
          return Object.keys(n).reduce(function (u, c) {
            var f = n[c],
              s = (0, i.get)(f, "injectedComponents", [])
                .filter(function (n) {
                  return (
                    n.plugin === "".concat(d.default, ".").concat(e) &&
                    n.area === t
                  );
                })
                .map(function (e) {
                  var t = e.component;
                  return l.default.createElement(
                    t,
                    (0, r.default)({}, e, a, { key: e.key })
                  );
                });
            return [].concat((0, o.default)(u), (0, o.default)(s));
          }, []);
        };
      t.default = u;
    },
    3401: function (e, t, n) {
      "use strict";
      var a = n(5),
        o = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ListRow = C),
        (t.default = void 0);
      var r = o(n(10)),
        l = a(n(1)),
        i = o(n(2)),
        d = n(8),
        u = n(11),
        c = n(9),
        f = n(29),
        s = o(n(112)),
        p = o(n(127)),
        m = o(n(3396)),
        _ = o(n(67)),
        g = o(n(3402)),
        b = o(n(140)),
        h = o(n(3403));
      function y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? y(Object(n), !0).forEach(function (t) {
                (0, r.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : y(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function C(e) {
        var t = e.configurable,
          n = e.name,
          a = e.dzName,
          o = e.nature,
          r = e.onClick,
          i = e.plugin,
          y = e.target,
          C = e.targetUid,
          w = e.type,
          x = e.mainTypeName,
          O = e.editTarget,
          E = e.firstLoopComponentName,
          k = e.firstLoopComponentUid,
          T = e.isFromDynamicZone,
          P = e.repeatable,
          j = e.secondLoopComponentName,
          N = e.secondLoopComponentUid,
          D = e.isNestedInDZComponent,
          L = (0, p.default)(),
          M = L.contentTypes,
          F = L.isInDevelopmentMode,
          U = L.modifiedData,
          Z = L.removeAttribute,
          I = "*" === y,
          z = ["integer", "biginteger", "float", "decimal"].includes(w)
            ? "number"
            : w,
          R = w;
        ["integer", "biginteger", "float", "decimal"].includes(w)
          ? (R = "number")
          : ["string"].includes(w) && (R = "text");
        var S,
          A = (0, d.get)(M, [y, "schema", "name"], ""),
          q = y ? "relation" : z,
          B = function () {
            if (!I && !1 !== t) {
              var e = (0, d.get)(U, ["components", k, "category"], null),
                l = (0, d.get)(U, ["components", N, "category"], null),
                i = o ? "relation" : w,
                u = (0, m.default)(i),
                c = {
                  header_label_1: x,
                  header_icon_name_1: u,
                  header_icon_isCustom_1: !1,
                  header_info_category_1: null,
                  header_info_name_1: null,
                },
                f = {
                  header_label_2: n,
                  header_icon_name_2: null,
                  header_icon_isCustom_2: !1,
                  header_info_category_2: null,
                  header_info_name_2: null,
                },
                s = {
                  header_icon_name_3: "component",
                  header_icon_isCustom_3: !1,
                  header_info_category_3: null,
                  header_info_name_3: null,
                },
                p = {
                  header_icon_name_4: null,
                  header_icon_isCustom_4: !1,
                  header_info_category_4: null,
                  header_info_name_4: null,
                },
                _ = {
                  header_icon_name_5: null,
                  header_icon_isCustom_5: !1,
                  header_info_category_5: null,
                  header_info_name_5: null,
                };
              E &&
                ((f = {
                  header_label_2: E,
                  header_icon_name_2: "component",
                  header_icon_isCustom_2: !1,
                  header_info_category_2: e,
                  header_info_name_2: E,
                }),
                (s = v(
                  v({}, s),
                  {},
                  { header_label_3: n, header_icon_name_3: null }
                ))),
                N &&
                  ((s = v(
                    v({}, s),
                    {},
                    {
                      header_label_3: j,
                      header_icon_name_3: "component",
                      header_info_category_3: l,
                      header_info_name_3: j,
                    }
                  )),
                  (p = v(
                    v({}, p),
                    {},
                    { header_label_4: n, header_icon_name_4: null }
                  ))),
                (T || D) &&
                  ((f = {
                    header_label_2: a,
                    header_icon_name_2: "dynamiczone",
                    header_icon_isCustom_2: !1,
                    header_info_name_2: null,
                    header_info_category_2: null,
                  }),
                  (s = {
                    header_icon_name_3: "component",
                    header_label_3: E,
                    header_info_name_3: e,
                    header_info_category_3: e,
                  }),
                  D
                    ? ((p = {
                        header_icon_name_4: "components",
                        header_icon_isCustom_4: !1,
                        header_info_category_4: l,
                        header_info_name_4: j,
                        header_label_4: j,
                      }),
                      (_ = v(v({}, _), {}, { header_label_5: n })))
                    : (p = {
                        header_icon_name_4: null,
                        header_icon_isCustom_4: !1,
                        header_info_category_4: null,
                        header_label_4: n,
                      })),
                r(O, N || k || C, n, i, c, f, s, p, _);
            }
          };
        return (
          (S = N && k ? 2 : k ? 1 : 0),
          l.default.createElement(
            h.default,
            {
              onClick: B,
              className: [y ? "relation-row" : "", t ? "clickable" : ""],
              loopNumber: S,
            },
            l.default.createElement(
              "td",
              null,
              l.default.createElement(c.AttributeIcon, { key: q, type: q }),
              l.default.createElement(g.default, {
                fill: T ? "#AED4FB" : "#f3f4f4",
              })
            ),
            l.default.createElement(
              "td",
              { style: { fontWeight: 600 } },
              l.default.createElement("p", null, n)
            ),
            l.default.createElement(
              "td",
              null,
              y
                ? l.default.createElement(
                    "div",
                    null,
                    l.default.createElement(u.FormattedMessage, {
                      id: ""
                        .concat(s.default, ".modelPage.attribute.")
                        .concat(I ? "relation-polymorphic" : "relationWith"),
                    }),
                    "\xa0",
                    l.default.createElement(
                      u.FormattedMessage,
                      { id: "".concat(s.default, ".from") },
                      function (e) {
                        return l.default.createElement(
                          "span",
                          { style: { fontStyle: "italic" } },
                          l.default.createElement(b.default, { content: A }),
                          "\xa0",
                          i && "(".concat(e, ": ").concat(i, ")")
                        );
                      }
                    )
                  )
                : l.default.createElement(
                    l.default.Fragment,
                    null,
                    l.default.createElement(u.FormattedMessage, {
                      id: "".concat(s.default, ".attribute.").concat(R),
                    }),
                    "\xa0",
                    P &&
                      l.default.createElement(u.FormattedMessage, {
                        id: (0, _.default)("component.repeatable"),
                      })
                  )
            ),
            l.default.createElement(
              "td",
              { className: "button-container" },
              F &&
                l.default.createElement(
                  l.default.Fragment,
                  null,
                  t
                    ? l.default.createElement(
                        l.default.Fragment,
                        null,
                        I
                          ? l.default.createElement(c.IconLinks, {
                              links: [
                                {
                                  icon: l.default.createElement(
                                    f.FontAwesomeIcon,
                                    { icon: "trash-alt" }
                                  ),
                                  onClick: function (e) {
                                    e.stopPropagation(), Z(O, n, N || k || "");
                                  },
                                },
                              ],
                            })
                          : l.default.createElement(c.IconLinks, {
                              links: [
                                {
                                  icon: l.default.createElement(
                                    f.FontAwesomeIcon,
                                    { icon: "pencil-alt" }
                                  ),
                                  onClick: function () {
                                    return B();
                                  },
                                },
                                {
                                  icon: l.default.createElement(
                                    f.FontAwesomeIcon,
                                    { icon: "trash-alt" }
                                  ),
                                  onClick: function (e) {
                                    e.stopPropagation(), Z(O, n, N || k || "");
                                  },
                                },
                              ],
                            })
                      )
                    : l.default.createElement(
                        "button",
                        { type: "button" },
                        l.default.createElement(f.FontAwesomeIcon, {
                          icon: "lock",
                        })
                      )
                )
            )
          )
        );
      }
      (C.defaultProps = {
        configurable: !0,
        dzName: null,
        firstLoopComponentName: null,
        firstLoopComponentUid: null,
        isFromDynamicZone: !1,
        isNestedInDZComponent: !1,
        nature: null,
        onClick: function () {},
        plugin: null,
        repeatable: !1,
        secondLoopComponentName: null,
        secondLoopComponentUid: null,
        target: null,
        targetUid: null,
        type: null,
      }),
        (C.propTypes = {
          configurable: i.default.bool,
          dzName: i.default.string,
          editTarget: i.default.string.isRequired,
          firstLoopComponentName: i.default.string,
          firstLoopComponentUid: i.default.string,
          isFromDynamicZone: i.default.bool,
          isNestedInDZComponent: i.default.bool,
          mainTypeName: i.default.string.isRequired,
          name: i.default.string.isRequired,
          nature: i.default.string,
          onClick: i.default.func,
          plugin: i.default.string,
          repeatable: i.default.bool,
          secondLoopComponentName: i.default.string,
          secondLoopComponentUid: i.default.string,
          target: i.default.string,
          targetUid: i.default.string,
          type: i.default.string,
        });
      var w = (0, l.memo)(C);
      t.default = w;
    },
    3402: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(7)),
        r = a(n(1)),
        l = a(n(2)),
        i = function (e) {
          return r.default.createElement(
            "svg",
            (0, o.default)(
              { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 21.08 21" },
              e
            ),
            r.default.createElement(
              "g",
              null,
              r.default.createElement("path", {
                d: "M2.58 2.5q-1.2 16 16 16",
                fill: "none",
                stroke: e.fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "5",
              })
            )
          );
        };
      (i.defaultProps = { fill: "#f3f4f4" }),
        (i.propTypes = { fill: l.default.string });
      var d = i;
      t.default = d;
    },
    3403: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(6),
        d = l.default.tr(
          o ||
            (o = (0, r.default)([
              "\n  background-color: transparent;\n  p {\n    margin-bottom: 0;\n  }\n  img {\n    width: 35px;\n  }\n  button {\n    cursor: pointer;\n  }\n  td:first-of-type {\n    padding-left: 3rem;\n    position: relative;\n    img {\n      width: 35px;\n      height: 20px;\n      position: absolute;\n      top: calc(50% - 10px);\n      left: 3rem;\n    }\n    img + p {\n      width: 237px;\n      padding-left: calc(3rem + 35px);\n    }\n  }\n  td:nth-child(2) {\n    ",
              "\n    p {\n      font-weight: 500;\n    }\n  }\n  td:last-child {\n    text-align: right;\n    &:not(:first-of-type) {\n      font-size: 10px;\n    }\n  }\n  &.relation-row {\n    background: linear-gradient(135deg, rgba(28, 93, 231, 0.05), rgba(239, 243, 253, 0));\n  }\n  &.clickable {\n    &:hover {\n      cursor: pointer;\n      background-color: ",
              ";\n      & + tr {\n        &::before {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .button-container {\n    svg {\n      color: #333740;\n      vertical-align: middle;\n    }\n  }\n",
            ])),
          function (e) {
            var t = e.loopNumber;
            return "\n        width: calc(25rem - ".concat(
              5 * t,
              "rem);\n      "
            );
          },
          i.colors.grey
        );
      t.default = d;
    },
    3404: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = n(1),
        r = a(n(3394)),
        l = function () {
          return (0, o.useContext)(r.default);
        };
      t.default = l;
    },
    3405: function (e, t, n) {
      "use strict";
      var a = n(5),
        o = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n(7)),
        l = o(n(12)),
        i = a(n(1)),
        d = o(n(2)),
        u = n(11),
        c = n(32),
        f = n(46),
        s = o(n(127)),
        p = o(n(67)),
        m = o(n(3398)),
        _ = o(n(3406)),
        g = o(n(3399)),
        b = o(n(3409));
      function h(e) {
        var t = e.customRowComponent,
          n = e.components,
          a = e.addComponent,
          o = e.mainTypeName,
          d = e.name,
          h = e.targetUid,
          y = (0, s.default)().isInDevelopmentMode,
          v = (0, i.useState)("0"),
          C = (0, l.default)(v, 2),
          w = C[0],
          x = C[1];
        return i.default.createElement(
          "tr",
          { className: "dynamiczone-row" },
          i.default.createElement(
            g.default,
            { colSpan: 12, isFromDynamicZone: !0 },
            i.default.createElement(
              "div",
              null,
              i.default.createElement(
                "div",
                { className: "tabs-wrapper" },
                i.default.createElement(
                  c.Nav,
                  { tabs: !0 },
                  y &&
                    i.default.createElement(
                      "li",
                      null,
                      i.default.createElement(
                        b.default,
                        {
                          onClick: function () {
                            a(d);
                          },
                        },
                        i.default.createElement(
                          "div",
                          null,
                          i.default.createElement(f.Plus, {
                            style: { height: 15, width: 15 },
                          })
                        ),
                        i.default.createElement(
                          "p",
                          null,
                          i.default.createElement(u.FormattedMessage, {
                            id: (0, p.default)("button.component.add"),
                          })
                        )
                      )
                    ),
                  n.map(function (e, t) {
                    return i.default.createElement(
                      "li",
                      { key: e },
                      i.default.createElement(_.default, {
                        dzName: d,
                        index: t,
                        component: e,
                        isActive: w === "".concat(t),
                        isInDevelopmentMode: y,
                        onClick: function () {
                          var e;
                          (e = "".concat(t)), w !== e && x(e);
                        },
                      })
                    );
                  })
                )
              ),
              i.default.createElement(
                c.TabContent,
                { activeTab: w },
                n.map(function (e, n) {
                  var a = { customRowComponent: t, component: e };
                  return i.default.createElement(
                    c.TabPane,
                    { tabId: "".concat(n), key: e },
                    i.default.createElement(
                      "table",
                      null,
                      i.default.createElement(
                        "tbody",
                        null,
                        i.default.createElement(
                          m.default,
                          (0, r.default)({}, a, {
                            isFromDynamicZone: !0,
                            dzName: d,
                            mainTypeName: o,
                            targetUid: h,
                            key: e,
                          })
                        )
                      )
                    )
                  );
                })
              )
            )
          )
        );
      }
      (h.defaultProps = {
        addComponent: function () {},
        components: [],
        customRowComponent: null,
        name: null,
      }),
        (h.propTypes = {
          addComponent: d.default.func,
          components: d.default.instanceOf(Array),
          customRowComponent: d.default.func,
          mainTypeName: d.default.string.isRequired,
          name: d.default.string,
          targetUid: d.default.string.isRequired,
        });
      var y = h;
      t.default = y;
    },
    3406: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(1)),
        r = n(8),
        l = a(n(2)),
        i = n(29),
        d = a(n(127)),
        u = a(n(3407)),
        c = a(n(3408));
      function f(e) {
        var t = e.component,
          n = e.dzName,
          a = e.index,
          l = e.isActive,
          f = e.isInDevelopmentMode,
          s = e.onClick,
          p = (0, d.default)(),
          m = p.modifiedData,
          _ = p.removeComponentFromDynamicZone,
          g = (0, r.get)(m, ["components", t], { schema: { icon: null } })
            .schema,
          b = g.icon,
          h = g.name;
        return o.default.createElement(
          u.default,
          { onClick: s, className: l ? "active" : "" },
          o.default.createElement(
            "div",
            null,
            o.default.createElement(i.FontAwesomeIcon, { icon: b })
          ),
          o.default.createElement("p", null, h),
          o.default.createElement(
            "div",
            {
              className: "close-btn",
              onClick: function (e) {
                e.stopPropagation(), _(n, a);
              },
            },
            f &&
              o.default.createElement(c.default, {
                width: "7px",
                height: "7px",
              })
          )
        );
      }
      (f.defaultProps = {
        component: null,
        isActive: !1,
        isInDevelopmentMode: !1,
        onClick: function () {},
      }),
        (f.propTypes = {
          component: l.default.string,
          dzName: l.default.string.isRequired,
          index: l.default.number.isRequired,
          isActive: l.default.bool,
          isInDevelopmentMode: l.default.bool,
          onClick: l.default.func,
        });
      var s = f;
      t.default = s;
    },
    3407: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)).default.button(
          o ||
            (o = (0, r.default)([
              "\n  width: 139px;\n  height: 90px;\n  position: relative;\n  padding: 0;\n  padding-top: 5px;\n  border-radius: 2px;\n  text-align: center;\n  border: solid 1px #fafafb;\n  background-color: #fafafb;\n\n  &:focus {\n    outline: 0;\n  }\n\n  div:first-of-type {\n    display: flex;\n    width: 35px;\n    height: 35px;\n    margin: auto;\n    border-radius: 18px;\n    background-color: #e9eaeb;\n    color: #919bae;\n    font-size: 12px;\n\n    svg {\n      margin: auto;\n    }\n  }\n\n  div:last-of-type {\n    position: absolute;\n    padding: 0 7px;\n    top: 0;\n    right: 0;\n    display: none;\n  }\n\n  p {\n    margin-top: 5px;\n    padding-left: 5px;\n    padding-right: 5px;\n    line-height: normal;\n    font-size: 13px;\n    font-weight: bold;\n    color: #919bae;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  &.active {\n    cursor: initial;\n  }\n\n  &:hover,\n  &.active {\n    border-color: #aed4fb;\n    background-color: #e6f0fb;\n\n    div:first-of-type {\n      background-color: #aed4fb;\n      color: #007eff;\n    }\n\n    div:last-of-type {\n      display: block;\n    }\n\n    p {\n      color: #007eff;\n    }\n  }\n",
            ]))
        );
      t.default = l;
    },
    3408: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(46),
        d = (0, l.default)(i.Remove)(
          o ||
            (o = (0, r.default)([
              "\n  > g {\n    > path {\n      fill: #007eff;\n    }\n  }\n",
            ]))
        );
      t.default = d;
    },
    3409: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)).default.button(
          o ||
            (o = (0, r.default)([
              "\n  width: 139px;\n  height: 90px;\n  padding-top: 7px;\n  &:focus {\n    outline: 0;\n  }\n\n  div {\n    width: 35px;\n    height: 35px;\n    border-radius: 18px;\n    background-color: #2c3138;\n    display: flex;\n    margin: auto;\n    svg {\n      margin: auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n  p {\n    margin-top: 5px;\n    font-size: 13px;\n    font-weight: bold;\n    color: #2c3138;\n    line-height: normal;\n  }\n",
            ]))
        );
      t.default = l;
    },
    3410: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(36),
        d = (0, l.default)(i.List)(
          o ||
            (o = (0, r.default)([
              "\n  table-layout: fixed;\n\n  tbody {\n    td:first-of-type:not(:last-of-type) {\n      width: 73px;\n      padding-left: 30px;\n      > svg {\n        width: auto;\n        height: 16px;\n        position: absolute;\n        left: -4px;\n        top: 16px;\n        display: none;\n      }\n    }\n    td[colspan='12'] {\n      position: relative;\n      padding: 0 0 0 50px;\n      > div {\n        box-shadow: none;\n      }\n    }\n    tr.component-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      table tr td:first-of-type:not(:last-of-type) {\n        width: 79px;\n        padding-left: 36px;\n        svg {\n          display: block;\n        }\n      }\n    }\n    table + div button {\n      position: relative;\n      background-color: transparent;\n      text-transform: initial;\n      color: #9ea7b8;\n      text-align: left;\n      padding-left: 35px;\n      border-color: transparent;\n      svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    }\n    tr.dynamiczone-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      > td[colspan='12'] {\n        padding-left: 0;\n        padding-right: 0;\n      }\n\n      .tabs-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        padding-top: 18px;\n        padding-left: 86px;\n        padding-right: 30px;\n        .nav-tabs {\n          border-bottom: 0;\n        }\n        ul.nav {\n          width: 100%;\n          display: flex;\n          flex-wrap: nowrap;\n          overflow-x: auto;\n          overflow-y: hidden;\n          li {\n            margin-right: 9px;\n          }\n        }\n        & + .tab-content {\n          padding-top: 126px;\n          position: relative;\n          z-index: 1;\n        }\n      }\n    }\n  }\n  & + .plus-icon {\n    width: 27px;\n    height: 27px;\n    border-radius: 18px;\n    position: absolute;\n    bottom: 14px;\n    left: 34px;\n    background-color: ",
              ";\n\n    color: transparent;\n    text-align: center;\n    line-height: 27px;\n    display: flex;\n    cursor: pointer;\n    svg {\n      margin: auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n",
            ])),
          function (e) {
            return e.isFromDynamicZone ? "#AED4FB" : "#f3f4f4";
          }
        );
      d.defaultProps = { isFromDynamicZone: !1 };
      var u = d;
      t.default = u;
    },
    3411: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(9),
        d = (0, l.default)(i.Button)(
          o ||
            (o = (0, r.default)([
              "\n  padding-left: 15px;\n  padding-right: 15px;\n",
            ]))
        );
      t.default = d;
    },
    3412: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o = a(n(1)),
        r = a(n(2)),
        l = a(n(3413)),
        i = a(n(3414));
      function d(e) {
        var t = e.actions,
          n = e.title;
        return o.default.createElement(
          i.default,
          null,
          o.default.createElement(
            "div",
            { className: "list-header-actions" },
            t
          ),
          o.default.createElement(
            "div",
            { className: "list-header-title" },
            n.map(function (e) {
              return o.default.createElement(l.default, { key: e }, e, "\xa0");
            })
          )
        );
      }
      (d.defaultProps = { actions: [], title: [] }),
        (d.propTypes = {
          actions: r.default.arrayOf(
            r.default.shape({
              disabled: r.default.bool,
              onClick: r.default.func,
              title: r.default.string,
            })
          ),
          title: r.default.arrayOf(r.default.string),
        });
      var u = d;
      t.default = u;
    },
    3413: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(6),
        d = l.default.p(
          o ||
            (o = (0, r.default)([
              "\n  margin-bottom: 0;\n  color: ",
              ";\n  font-family: 'Lato';\n  font-size: 1.8rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n",
            ])),
          i.colors.blueTxt
        );
      t.default = d;
    },
    3414: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)).default.div(
          o ||
            (o = (0, r.default)([
              "\n  position: relative;\n  padding: 2.1rem 6rem 1.7rem 3rem;\n  background-color: white;\n  .list-header-actions {\n    position: absolute;\n    top: 1.8rem;\n    right: 3rem;\n    button {\n      outline: 0;\n      margin-left: 10px;\n    }\n  }\n",
            ]))
        );
      t.default = l;
    },
    3415: function (e, t, n) {
      "use strict";
      var a = n(5),
        o = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n(25)),
        l = o(n(7)),
        i = o(n(10)),
        d = o(n(26)),
        u = a(n(1)),
        c = o(n(2)),
        f = n(8),
        s = n(21),
        p = n(6),
        m = n(9),
        _ = o(n(112)),
        g = o(n(67)),
        b = o(n(3416)),
        h = o(n(127)),
        y = o(n(496)),
        v = o(n(3419));
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, i.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var x = function () {
        strapi.notification.toggle({
          type: "info",
          message: {
            id: "".concat(_.default, ".notification.info.creating.notSaved"),
          },
        });
      };
      function O(e) {
        var t = e.wait,
          n = (0, h.default)(),
          a = n.components,
          o = n.componentsGroupedByCategory,
          i = n.contentTypes,
          c = n.isInDevelopmentMode,
          C = n.sortedContentTypesList,
          O = (0, p.useGlobalContext)(),
          E = O.emitEvent,
          k = O.formatMessage,
          T = (0, s.useHistory)().push,
          P = (0, f.sortBy)(
            Object.keys(o).map(function (e) {
              return {
                name: e,
                title: e,
                isEditable: c,
                onClickEdit: function (e, t) {
                  e.stopPropagation();
                  var n = (0, y.default)({
                    actionType: "edit",
                    modalType: "editCategory",
                    categoryName: t.name,
                    header_label_1: k({
                      id: (0, g.default)("modalForm.header.categories"),
                    }),
                    header_icon_name_1: "component",
                    header_icon_isCustom_1: !1,
                    header_info_category_1: null,
                    header_info_name_1: null,
                    header_label_2: t.name,
                    header_icon_name_2: null,
                    header_icon_isCustom_2: !1,
                    header_info_category_2: null,
                    header_info_name_2: null,
                    settingType: "base",
                  });
                  T({ search: n });
                },
                links: (0, f.sortBy)(
                  o[e].map(function (t) {
                    return {
                      name: t.uid,
                      to: "/plugins/"
                        .concat(_.default, "/component-categories/")
                        .concat(e, "/")
                        .concat(t.uid),
                      title: t.schema.name,
                    };
                  }),
                  function (e) {
                    return e.title;
                  }
                ),
              };
            }),
            function (e) {
              return e.title;
            }
          ),
          j = function () {
            return (
              !Object.keys(i).some(function (e) {
                return !0 === i[e].isTemporary;
              }) &&
              !Object.keys(a).some(function (e) {
                return !0 === a[e].isTemporary;
              })
            );
          },
          N = (function () {
            var e = (0, d.default)(
              r.default.mark(function e(n) {
                var a,
                  o,
                  l,
                  i = arguments;
                return r.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((a = i.length > 1 && void 0 !== i[1] ? i[1] : ""),
                          (o = "singleType" === a ? a : n),
                          !j())
                        ) {
                          e.next = 10;
                          break;
                        }
                        return (
                          E(
                            "willCreate".concat(
                              (0, f.upperFirst)((0, f.camelCase)(o))
                            )
                          ),
                          (e.next = 6),
                          t()
                        );
                      case 6:
                        (l = (0, y.default)({
                          modalType: n,
                          kind: a,
                          actionType: "create",
                          settingType: "base",
                          forTarget: n,
                          headerId: (0, g.default)(
                            "modalForm.".concat(o, ".header-create")
                          ),
                          header_icon_isCustom_1: "false",
                          header_icon_name_1: o,
                          header_label_1: "null",
                        })),
                          T({ search: l }),
                          (e.next = 11);
                        break;
                      case 10:
                        x();
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          D = (0, u.useMemo)(
            function () {
              return C.filter(function (e) {
                return e.editable;
              }).map(function (e) {
                return e.plugin
                  ? w(
                      w({}, e),
                      {},
                      {
                        CustomComponent: function () {
                          return u.default.createElement(
                            "p",
                            { style: { justifyContent: "normal" } },
                            e.title,
                            "\xa0",
                            u.default.createElement(
                              m.Text,
                              {
                                as: "span",
                                ellipsis: !0,
                                style: { fontStyle: "italic" },
                                fontWeight: "inherit",
                                lineHeight: "inherit",
                              },
                              "(",
                              k({ id: (0, g.default)("from") }),
                              ": ",
                              e.plugin,
                              ")\xa0"
                            )
                          );
                        },
                      }
                    )
                  : e;
              });
            },
            [C, k]
          ),
          L = [
            {
              name: "models",
              title: { id: "".concat(_.default, ".menu.section.models.name.") },
              searchable: !0,
              customLink: c
                ? {
                    Component: b.default,
                    componentProps: {
                      id: "".concat(_.default, ".button.model.create"),
                      onClick: function () {
                        N("contentType", "collectionType");
                      },
                    },
                  }
                : null,
              links: D.filter(function (e) {
                return "collectionType" === e.kind;
              }),
            },
            {
              name: "singleTypes",
              title: {
                id: "".concat(_.default, ".menu.section.single-types.name."),
              },
              searchable: !0,
              customLink: c
                ? {
                    Component: b.default,
                    componentProps: {
                      id: "".concat(_.default, ".button.single-types.create"),
                      onClick: function () {
                        N("contentType", "singleType");
                      },
                    },
                  }
                : null,
              links: D.filter(function (e) {
                return "singleType" === e.kind;
              }),
            },
            {
              name: "components",
              title: {
                id: "".concat(_.default, ".menu.section.components.name."),
              },
              searchable: !0,
              customLink: c
                ? {
                    Component: b.default,
                    componentProps: {
                      id: "".concat(_.default, ".button.component.create"),
                      onClick: function () {
                        N("component");
                      },
                    },
                  }
                : null,
              links: P,
            },
          ];
        return u.default.createElement(
          v.default,
          { className: "col-md-3" },
          L.map(function (e) {
            return u.default.createElement(
              p.LeftMenuList,
              (0, l.default)({}, e, { key: e.name })
            );
          })
        );
      }
      (O.defaultProps = { wait: function () {} }),
        (O.propTypes = { wait: c.default.func });
      var E = O;
      t.default = E;
    },
    3416: function (e, t, n) {
      "use strict";
      var a = n(0),
        o = n(5);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CustomLink = t.default = void 0);
      var r = o(n(1)),
        l = n(11),
        i = a(n(2)),
        d = n(46),
        u = a(n(3417)),
        c = a(n(3418)),
        f = function (e) {
          var t = e.disabled,
            n = e.id,
            a = e.onClick;
          return r.default.createElement(
            c.default,
            { disabled: t },
            r.default.createElement(
              "button",
              { onClick: a, disabled: t, type: "button" },
              r.default.createElement(
                u.default,
                null,
                r.default.createElement(d.Plus, {
                  fill: "#007EFF",
                  width: "11px",
                  height: "11px",
                }),
                n && r.default.createElement(l.FormattedMessage, { id: n })
              )
            )
          );
        };
      (t.CustomLink = f),
        (f.defaultProps = { disabled: !1, id: null }),
        (f.propTypes = {
          disabled: i.default.bool,
          id: i.default.string,
          onClick: i.default.func.isRequired,
        });
      var s = (0, r.memo)(f);
      t.default = s;
    },
    3417: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(6),
        d = l.default.p(
          o ||
            (o = (0, r.default)([
              "\n  color: ",
              ";\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: left;\n  > svg {\n    margin-right: 7px;\n    vertical-align: initial;\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n",
            ])),
          i.colors.blue
        );
      t.default = d;
    },
    3418: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)).default.div(
          o ||
            (o = (0, r.default)([
              "\n  padding-left: 15px;\n  padding-top: 6px;\n  margin-left: -3px;\n  button {\n    cursor: ",
              ";\n    padding: 0;\n    line-height: 16px;\n  }\n",
            ])),
          function (e) {
            return e.disabled ? "not-allowed" : "pointer";
          }
        );
      t.default = l;
    },
    3419: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(6),
        d = l.default.div(
          o ||
            (o = (0, r.default)([
              "\n  width: 100%;\n  min-height: calc(100vh - ",
              ");\n  background-color: ",
              ";\n  padding-top: 3.1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n",
            ])),
          i.sizes.header.height,
          i.colors.leftMenu.mediumGrey
        );
      t.default = d;
    },
    3420: function (e, t, n) {
      "use strict";
      var a = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var o,
        r = a(n(4)),
        l = a(n(3)),
        i = n(6),
        d = (0, l.default)(i.ViewContainer)(
          o ||
            (o = (0, r.default)([
              "\n  .button-secondary {\n    &:hover {\n      background-color: #ffffff !important;\n      box-shadow: 0 0 0 #fff;\n    }\n  }\n  .button-submit {\n    min-width: 140px;\n  }\n",
            ]))
        );
      t.default = d;
    },
    994: function (e, t, n) {
      "use strict";
      var a = n(5),
        o = n(0);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(n(25)),
        l = o(n(7)),
        i = o(n(19)),
        d = o(n(10)),
        u = o(n(26)),
        c = o(n(12)),
        f = a(n(1)),
        s = n(21),
        p = o(n(2)),
        m = n(8),
        _ = n(6),
        g = n(35),
        b = o(n(3394)),
        h = o(n(3395)),
        y = o(n(3396)),
        v = o(n(112)),
        C = o(n(3400)),
        w = o(n(67)),
        x = o(n(496)),
        O = o(n(3401)),
        E = o(n(3397)),
        k = o(n(3411)),
        T = o(n(127)),
        P = o(n(3412)),
        j = o(n(3415)),
        N = o(n(3420));
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function (t) {
                (0, d.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var M = function () {
        var e = (0, T.default)(),
          t = e.initialData,
          n = e.modifiedData,
          a = e.isInDevelopmentMode,
          o = e.isInContentTypeView,
          d = e.submitData,
          D = e.toggleModalCancel,
          M = (0, _.useGlobalContext)(),
          F = M.emitEvent,
          U = M.formatMessage,
          Z = M.plugins,
          I = (0, s.useHistory)(),
          z = I.push,
          R = I.goBack,
          S = (0, s.useLocation)().search,
          A = (0, f.useState)(!0),
          q = (0, c.default)(A, 2),
          B = q[0],
          H = q[1];
        (0, f.useEffect)(
          function () {
            "" === S && H(!0);
          },
          [S]
        ),
          (0, f.useEffect)(function () {
            "" !== S && H(!1);
          }, []);
        var G = o ? "contentType" : "component",
          W = [G, "schema", "attributes"],
          V = (0, m.get)(n, [G, "uid"]),
          J = (0, m.get)(n, [G, "isTemporary"], !1),
          K = (0, m.get)(n, [G, "schema", "kind"], null),
          Q = (0, m.get)(n, W, {}),
          X = Object.keys(Q).length,
          Y = (0, m.get)(t, [G, "schema", "name"], ""),
          $ = (0, m.has)(t, [G, "plugin"]),
          ee = !(0, m.isEqual)(n, t),
          te = o ? "contentType" : "component",
          ne = (function () {
            var e = (0, u.default)(
              r.default.mark(function e(t, n, a, o, l, i) {
                var d;
                return r.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), re();
                      case 2:
                        (d = L(
                          L(
                            L(
                              L(
                                {
                                  modalType: "chooseAttribute",
                                  forTarget: t,
                                  targetUid: n,
                                },
                                a
                              ),
                              o
                            ),
                            l
                          ),
                          i
                        )),
                          z({ search: (0, x.default)(d) });
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, a, o, r, l) {
              return e.apply(this, arguments);
            };
          })(),
          ae = (function () {
            var e = (0, u.default)(
              r.default.mark(function e(t) {
                var n, a;
                return r.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = { header_label_2: t }),
                          (a = L(
                            L(
                              {
                                modalType: "addComponentToDynamicZone",
                                forTarget: "contentType",
                                targetUid: V,
                                dynamicZoneTarget: t,
                                settingType: "base",
                                step: "1",
                                actionType: "edit",
                              },
                              {
                                header_label_1: Y,
                                header_icon_name_1: "dynamiczone",
                                header_icon_isCustom_1: !1,
                              }
                            ),
                            n
                          )),
                          (e.next = 5),
                          re()
                        );
                      case 5:
                        z({ search: (0, x.default)(a, !0) });
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          oe = (function () {
            var e = (0, u.default)(
              r.default.mark(function e(t, n, a, o, l, i, d, u, c) {
                var f, s;
                return r.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (f = (0, y.default)(o)), (e.next = 3), re();
                      case 3:
                        return (
                          (s = L(
                            L(
                              L(
                                L(
                                  L(
                                    {
                                      modalType: "attribute",
                                      actionType: "edit",
                                      settingType: "base",
                                      forTarget: t,
                                      targetUid: n,
                                      attributeName: a,
                                      attributeType: f,
                                      step: "component" === o ? "2" : null,
                                    },
                                    l
                                  ),
                                  i
                                ),
                                d
                              ),
                              u
                            ),
                            c
                          )),
                          (e.next = 6),
                          re()
                        );
                      case 6:
                        z({ search: (0, x.default)(s, !0) });
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n, a, o, r, l, i, d, u) {
              return e.apply(this, arguments);
            };
          })(),
          re = (function () {
            var e = (0, u.default)(
              r.default.mark(function e() {
                return r.default.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          H(!1),
                          e.abrupt(
                            "return",
                            new Promise(function (e) {
                              return setTimeout(e, 100);
                            })
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          le = (0, m.get)(n, [G, "schema", "name"], ""),
          ie = (0, m.get)(n, [G, "schema", "kind"], ""),
          de = {
            actions: a
              ? [
                  {
                    color: "cancel",
                    onClick: function () {
                      D();
                    },
                    label: U({
                      id: "".concat(v.default, ".form.button.cancel"),
                    }),
                    type: "button",
                    disabled: (0, m.isEqual)(n, t),
                  },
                  {
                    className: "button-submit",
                    color: "success",
                    onClick: function () {
                      return d();
                    },
                    label: U({ id: "".concat(v.default, ".form.button.save") }),
                    type: "submit",
                    disabled: (0, m.isEqual)(n, t),
                  },
                ]
              : [],
            title: {
              label: le,
              cta:
                a && !$
                  ? {
                      icon: "pencil-alt",
                      onClick: (function () {
                        var e = (0, u.default)(
                          r.default.mark(function e() {
                            var t;
                            return r.default.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), re();
                                  case 2:
                                    "collectionType" === (t = ie || G) &&
                                      F("willEditNameOfContentType"),
                                      "singleType" === t &&
                                        F("willEditNameOfSingleType"),
                                      z({
                                        search: (0, x.default)({
                                          modalType: G,
                                          actionType: "edit",
                                          settingType: "base",
                                          forTarget: G,
                                          targetUid: V,
                                          header_label_1: le,
                                          header_icon_isCustom_1: !1,
                                          header_icon_name_1:
                                            "singleType" === t ? t : G,
                                          headerId: (0, w.default)(
                                            "modalForm.header-edit"
                                          ),
                                        }),
                                      });
                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })(),
                    }
                  : null,
            },
            content:
              (0, m.get)(n, [G, "schema", "description"], null) ||
              U({
                id: "".concat(
                  v.default,
                  ".modelPage.contentHeader.emptyDescription.description"
                ),
              }),
          },
          ue = [
            U(
              {
                id: ""
                  .concat(v.default, ".table.attributes.title.")
                  .concat(X > 1 ? "plural" : "singular"),
              },
              { number: X }
            ),
          ],
          ce = {
            icon: !0,
            color: "primary",
            label: U({
              id: "".concat(v.default, ".button.attributes.add.another"),
            }),
            onClick: function () {
              ne(te, V, {
                header_label_1: Y,
                header_icon_name_1: "contentType" === te ? K : te,
                header_icon_isCustom_1: !1,
              });
            },
          },
          fe = (0, f.useMemo)(
            function () {
              return (0, C.default)("listView", "list.link", Z, {
                targetUid: V,
                isTemporary: J,
                isInContentTypeView: o,
                contentTypeKind: K,
              });
            },
            [Z, J, V, o, K]
          ),
          se = a
            ? [].concat((0, i.default)(fe), [
                f.default.createElement(
                  k.default,
                  (0, l.default)({}, ce, { key: "add-button" })
                ),
              ])
            : fe,
          pe = function (e) {
            var t = e.name;
            return f.default.createElement(
              O.default,
              (0, l.default)({}, e, { attributeName: t, name: t, onClick: oe })
            );
          };
        return (
          (pe.defaultProps = { name: null }),
          (pe.propTypes = { name: p.default.string }),
          f.default.createElement(
            b.default.Provider,
            { value: { openModalAddField: ne } },
            f.default.createElement(
              N.default,
              null,
              f.default.createElement(_.BackHeader, { onClick: R }),
              f.default.createElement(s.Prompt, {
                message: U({ id: (0, w.default)("prompt.unsaved") }),
                when: ee && B,
              }),
              f.default.createElement(
                "div",
                { className: "container-fluid" },
                f.default.createElement(
                  "div",
                  { className: "row" },
                  f.default.createElement(j.default, { wait: re }),
                  f.default.createElement(
                    "div",
                    {
                      className: "col-md-9 content",
                      style: { paddingLeft: "30px", paddingRight: "30px" },
                    },
                    f.default.createElement(g.Header, de),
                    f.default.createElement(
                      _.ListWrapper,
                      { style: { marginBottom: 80 } },
                      f.default.createElement(P.default, {
                        actions: se,
                        title: ue,
                      }),
                      f.default.createElement(E.default, {
                        items: (0, h.default)(Q),
                        customRowComponent: function (e) {
                          return f.default.createElement(pe, e);
                        },
                        addComponentToDZ: ae,
                        targetUid: V,
                        dataType: te,
                        dataTypeName: Y,
                        mainTypeName: Y,
                        editTarget: te,
                        isMain: !0,
                      })
                    )
                  )
                )
              )
            )
          )
        );
      };
      t.default = M;
    },
  },
]);
