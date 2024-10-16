(this["webpackJsonpPaisa4you"] = this["webpackJsonpPaisa4you"] || []).push([
  [0],
  {
    32: function (e, t, s) {
      e.exports = {
        modalMask: "Modal_modalMask__1kANk",
        modalBody: "Modal_modalBody__2ss9D",
      };
    },
    35: function (e, t, s) {},
    46: function (e, t, s) {},
    55: function (e, t, s) {},
    63: function (e, t, s) {},
    64: function (e, t, s) {},
    65: function (e, t, s) {},
    66: function (e, t, s) {},
    71: function (e, t, s) {},
    72: function (e, t, s) {
      "use strict";
      s.r(t);
      var c = s(1),
        a = s.n(c),
        n = s(19),
        l = s.n(n),
        i = (s(46), s(7)),
        r = s(4),
        d = s(75),
        j = s(5);
      const b = d.a.create({
          baseURL: "https://paisa4youhr-api.onrender.com/api",
          withCredentials: !0,
        }),
        o = () => b.get("/auth/logout"),
        m = () => b.get("/admin/employees"),
        h = () => b.get("/admin/leaders"),
        x = () => b.get("/admin/leaders/free"),
        O = () => b.get("/admin/employees/free"),
        p = (e) => b.get(`/admin/team/${e}`),
        u = (e) => b.get(`/admin/user/${e}`),
        v = (e) => b.post("admin/view-employee-attendance", e),
        N = (e) => b.post("admin/view-leave-applications", e),
        g = (e, t) => b.post(`admin/update-leave/${e}`, t),
        f = (e) => b.post("admin/view-all-salary", e),
        y = (e) => b.get(`/employee/team/${e}`),
        w = (e) => b.post("/employee/view-leave-applications", e);
      b.interceptors.response.use(
        (e) => (console.log("All Cookies", document.cookie), e.data),
        (e) => (console.log(e), e.response.data)
      );
      var S = s(3),
        A = s(15);
      const D = Object(A.createSlice)({
          name: "authSlice",
          initialState: { isAuth: !1, user: null, email: "" },
          reducers: {
            setAuth: (e, t) => {
              const s = t.payload;
              (e.isAuth = null !== s), (e.user = s);
            },
            setEmail: (e, t) => {
              const s = t.payload;
              e.email = s;
            },
          },
        }),
        { setAuth: E, setEmail: k } = D.actions;
      var C = D.reducer,
        F = (s(55), s(0));
      var L = () => {
        const e = Object(S.b)(),
          [t, s] = Object(c.useState)({ email: "", password: "" }),
          a = (e) => {
            const { name: t, value: c } = e.target;
            s((e) => ({ ...e, [t]: c }));
          };
        return Object(F.jsxs)(F.Fragment, {
          children: [
            " ",
            Object(F.jsx)("div", {
              className: "navbarlogo",
              children: Object(F.jsx)("img", {
                src: "https://www.paisa4you.com/Images/png%20logo.png",
                alt: "Company Logo",
                width: "200",
              }),
            }),
            Object(F.jsxs)("div", {
              className: "login-container",
              children: [
                Object(F.jsxs)("div", {
                  className: "login-left",
                  children: [
                    Object(F.jsx)("div", {
                      className: "login-brand",
                      children: Object(F.jsx)("img", {
                        src: "https://www.paisa4you.com/Images/png%20logo.png",
                        alt: "Company Logo",
                        width: "200",
                      }),
                    }),
                    Object(F.jsxs)("div", {
                      className: "login-card",
                      children: [
                        Object(F.jsx)("h4", { children: "Hello! there" }),
                        Object(F.jsxs)("form", {
                          onSubmit: async (s) => {
                            s.preventDefault();
                            const { email: c, password: a } = t;
                            if (!c || !a)
                              return j.b.error("All Fields Required");
                            const n = await ((l = { email: c, password: a }),
                            b.post("/auth/login", l));
                            var l;
                            const { success: i } = n;
                            i && e(E(n.user));
                          },
                          className: "login-form",
                          children: [
                            Object(F.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(F.jsx)("label", {
                                  htmlFor: "email",
                                  children: "Email",
                                }),
                                Object(F.jsx)("input", {
                                  id: "email",
                                  onChange: a,
                                  value: t.email,
                                  type: "email",
                                  className: "form-control",
                                  name: "email",
                                  required: !0,
                                  autoFocus: !0,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group",
                              children: [
                                Object(F.jsx)("label", {
                                  htmlFor: "password",
                                  children: "Password",
                                }),
                                Object(F.jsx)("input", {
                                  id: "password",
                                  onChange: a,
                                  value: t.password,
                                  type: "password",
                                  className: "form-control",
                                  name: "password",
                                  required: !0,
                                }),
                              ],
                            }),
                            Object(F.jsx)("button", {
                              type: "submit",
                              className: "btn btn-primary btn-block",
                              children: "Login",
                            }),
                            Object(F.jsx)(r.b, {
                              to: "/forgot",
                              className: "forgot-password",
                              children: "Forgot Password?",
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(F.jsxs)("div", {
                      className: "login-footer",
                      children: [
                        Object(F.jsx)("span", {
                          children: "Developed by Shoaib Khan",
                        }),
                        Object(F.jsx)("div", {
                          className: "social-links",
                          children: Object(F.jsx)("a", {
                            href: "https://mohammad-shoaib-khan.vercel.app/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: Object(F.jsx)("img", {
                              style: { width: "25px" },
                              src: "https://pngimg.com/uploads/letter_s/letter_s_PNG34.png",
                              alt: "",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(F.jsx)("div", {
                  className: "login-right",
                  children: Object(F.jsxs)("div", {
                    className: "login-content",
                    children: [
                      Object(F.jsx)("h1", { children: "Welcome Back!" }),
                      Object(F.jsx)("p", {
                        children: "Your gateway to Paisa4You's employee portal",
                      }),
                      Object(F.jsx)("p", {
                        className: "highlight",
                        children:
                          "Stay connected, manage tasks, and access company resources with ease.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var R = () => Object(F.jsx)(L, {});
      var T = (e) => {
        let { onNext: t } = e;
        const s = Object(S.b)(),
          a = Object(S.c)((e) => e.authSlice.email),
          [n, l] = Object(c.useState)(a);
        return Object(F.jsx)("div", {
          id: "app",
          children: Object(F.jsx)("section", {
            className: "section",
            children: Object(F.jsx)("div", {
              className: "container mt-5",
              children: Object(F.jsx)("div", {
                className: "row",
                children: Object(F.jsxs)("div", {
                  className:
                    "col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4",
                  children: [
                    Object(F.jsx)("div", {
                      className: "login-brand",
                      children: Object(F.jsx)("img", {
                        src: "https://www.pockethrms.com/wp-content/uploads/2022/01/Happy-Workforce.jpg",
                        alt: "logo",
                        width: "200",
                        className: "",
                      }),
                    }),
                    Object(F.jsxs)("div", {
                      className: "card card-primary",
                      children: [
                        Object(F.jsx)("div", {
                          className: "card-header",
                          children: Object(F.jsx)("h4", {
                            children: "Forgot Password",
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "card-body",
                          children: [
                            Object(F.jsx)("p", {
                              className: "text-muted",
                              children:
                                "We will send an OTP to reset your password",
                            }),
                            Object(F.jsxs)("form", {
                              onSubmit: async (e) => {
                                if ((e.preventDefault(), !n)) return;
                                const c = await ((a = { email: n }),
                                b.post("/auth/forgot", a));
                                var a;
                                c.success
                                  ? (j.b.error(c.message), s(k(n)), t())
                                  : j.b.error(c.message);
                              },
                              children: [
                                Object(F.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    Object(F.jsx)("label", {
                                      htmlFor: "email",
                                      children: "Email",
                                    }),
                                    Object(F.jsx)("input", {
                                      id: "email",
                                      onChange: (e) => l(e.target.value),
                                      value: n,
                                      type: "email",
                                      className: "form-control",
                                      name: "email",
                                      tabIndex: "1",
                                      required: !0,
                                      autoFocus: !0,
                                    }),
                                  ],
                                }),
                                Object(F.jsx)("div", {
                                  className: "form-group",
                                  children: Object(F.jsx)("button", {
                                    type: "submit",
                                    className:
                                      "btn btn-primary btn-lg btn-block",
                                    tabIndex: "4",
                                    children: "Forgot Password",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(F.jsx)("div", {
                      className: "simple-footer",
                      children: "Copyright \xa9 Social Codia",
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
      var I = () => {
        const { email: e } = Object(S.c)((e) => e.authSlice),
          [t, s] = Object(c.useState)({ email: e, otp: "", password: "" }),
          a = Object(i.useHistory)(),
          n = (e) => {
            const { name: t, value: c } = e.target;
            s((e) => ({ ...e, [t]: c }));
          };
        return Object(F.jsx)("div", {
          id: "app",
          children: Object(F.jsx)("section", {
            className: "section",
            children: Object(F.jsx)("div", {
              className: "container mt-5",
              children: Object(F.jsx)("div", {
                className: "row",
                children: Object(F.jsxs)("div", {
                  className:
                    "col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4",
                  children: [
                    Object(F.jsx)("div", {
                      className: "login-brand",
                      children: Object(F.jsx)("img", {
                        src: "https://www.pockethrms.com/wp-content/uploads/2022/01/Happy-Workforce.jpg",
                        alt: "logo",
                        width: "200",
                        className: "",
                      }),
                    }),
                    Object(F.jsxs)("div", {
                      className: "card card-primary",
                      children: [
                        Object(F.jsx)("div", {
                          className: "card-header",
                          children: Object(F.jsx)("h4", {
                            children: "Reset Password",
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "card-body",
                          children: [
                            Object(F.jsx)("p", {
                              className: "text-muted",
                              children:
                                "We have send you an OTP to reset your password",
                            }),
                            Object(F.jsxs)("form", {
                              onSubmit: async (e) => {
                                e.preventDefault();
                                const { email: s, otp: c, password: n } = t;
                                if (!s || !c || !n)
                                  return j.b.error("All Fields Required");
                                const l = await ((i = {
                                  email: s,
                                  otp: c,
                                  password: n,
                                }),
                                b.patch("/auth/reset", i));
                                var i;
                                console.log(l),
                                  l.success
                                    ? j.b.success(l.message)
                                    : j.b.error(l.message),
                                  l.success && a.push("/login");
                              },
                              children: [
                                Object(F.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    Object(F.jsx)("label", {
                                      for: "email",
                                      children: "Email",
                                    }),
                                    Object(F.jsx)("input", {
                                      id: "email",
                                      onChange: n,
                                      value: t.email,
                                      type: "email",
                                      className: "form-control",
                                      name: "email",
                                      tabIndex: "1",
                                      required: !0,
                                      autoFocus: !0,
                                      readOnly: !0,
                                    }),
                                  ],
                                }),
                                Object(F.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    Object(F.jsx)("label", {
                                      for: "otp",
                                      children: "OTP",
                                    }),
                                    Object(F.jsx)("input", {
                                      id: "otp",
                                      onChange: n,
                                      value: t.otp,
                                      type: "number",
                                      className: "form-control pwstrength",
                                      "data-indicator": "pwindicator",
                                      name: "otp",
                                      tabIndex: "2",
                                      required: !0,
                                    }),
                                    Object(F.jsxs)("div", {
                                      id: "pwindicator",
                                      className: "pwindicator",
                                      children: [
                                        Object(F.jsx)("div", {
                                          className: "bar",
                                        }),
                                        Object(F.jsx)("div", {
                                          className: "label",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(F.jsxs)("div", {
                                  className: "form-group",
                                  children: [
                                    Object(F.jsx)("label", {
                                      for: "password",
                                      children: "New Password",
                                    }),
                                    Object(F.jsx)("input", {
                                      id: "password",
                                      onChange: n,
                                      value: t.password,
                                      type: "password",
                                      className: "form-control",
                                      name: "password",
                                      tabIndex: "2",
                                      required: !0,
                                    }),
                                  ],
                                }),
                                Object(F.jsx)("div", {
                                  className: "form-group",
                                  children: Object(F.jsx)("button", {
                                    type: "submit",
                                    className:
                                      "btn btn-primary btn-lg btn-block",
                                    tabIndex: "4",
                                    children: "Reset Password",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(F.jsx)("div", {
                      className: "simple-footer",
                      children: "Copyright \xa9 Social Codia",
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
      var P = () => {
        const [e, t] = Object(c.useState)(1),
          s = { 1: T, 2: I }[e];
        return Object(F.jsx)(F.Fragment, {
          children: Object(F.jsx)(s, {
            onNext: () => {
              t(e + 1);
            },
          }),
        });
      };
      var M = () => Object(F.jsx)(P, {});
      var U = (e) => {
        let { title: t } = e;
        return Object(F.jsx)("div", {
          className: "section-header",
          children: Object(F.jsx)("h1", { children: t }),
        });
      };
      const B = Object(A.createSlice)({
          name: "mainSlice",
          initialState: {
            counts: { admin: 0, team: 0, leader: 0, employee: 0 },
            employees: null,
          },
          reducers: {
            setCount: (e, t) => {
              const s = t.payload;
              e.counts = s;
            },
            setEmployees: (e, t) => {
              const s = t.payload;
              e.employees = s;
            },
          },
        }),
        { setCount: $, setEmployees: _ } = B.actions;
      var H = B.reducer;
      var Y = (e) => {
        let { title: t, icon: s, count: c } = e;
        return Object(F.jsx)("div", {
          className: "col-lg-3 col-md-6 col-sm-6 col-12",
          children: Object(F.jsxs)("div", {
            className: "card card-statistic-1",
            children: [
              Object(F.jsx)("div", {
                className: "card-icon bg-primary",
                children: Object(F.jsx)("i", { className: `far ${s}` }),
              }),
              Object(F.jsxs)("div", {
                className: "card-wrap",
                children: [
                  Object(F.jsx)("div", {
                    className: "card-header",
                    children: Object(F.jsx)("h4", { children: t }),
                  }),
                  Object(F.jsx)("div", { className: "card-body", children: c }),
                ],
              }),
            ],
          }),
        });
      };
      var q = () => {
        const e = Object(S.b)();
        Object(c.useEffect)(() => {
          (async () => {
            const t = await b.get("/admin/counts");
            t.success && e($(t.data));
          })();
        }, []);
        const { counts: t } = Object(S.c)((e) => e.mainSlice),
          { admin: s, employee: a, leader: n, team: l } = t;
        return Object(F.jsxs)("div", {
          className: "row",
          children: [
            Object(F.jsx)(Y, {
              title: "Total Employee",
              icon: "fa-user",
              count: a,
            }),
            Object(F.jsx)(Y, {
              title: "Total Leader",
              icon: "fa-user",
              count: n,
            }),
            Object(F.jsx)(Y, {
              title: "Total Admin",
              icon: "fa-user",
              count: s,
            }),
            Object(F.jsx)(Y, {
              title: "Total Team",
              icon: "fa-user",
              count: l,
            }),
          ],
        });
      };
      var W = () => {
        const { user: e, loading: t } = Object(S.c)((e) => e.authSlice),
          [s, a] = Object(c.useState)("basic");
        return t
          ? Object(F.jsx)("div", { children: "Loading..." })
          : e
          ? (console.log("user details are ", e),
            Object(F.jsx)("div", {
              className: "container mt-5",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsx)("div", {
                    className: "card mb-4",
                    children: Object(F.jsx)("div", {
                      className: "card-header d-flex justify-content-between",
                      children: Object(F.jsxs)("h4", {
                        children: [
                          "Welcome ",
                          null === e || void 0 === e ? void 0 : e.name,
                        ],
                      }),
                    }),
                  }),
                  Object(F.jsxs)("div", {
                    className: "btn-group mb-4",
                    role: "group",
                    "aria-label": "Basic details",
                    children: [
                      Object(F.jsx)("button", {
                        type: "button",
                        className:
                          "btn " +
                          ("basic" === s ? "btn-primary" : "btn-secondary"),
                        onClick: () => a("basic"),
                        children: "Basic Details",
                      }),
                      Object(F.jsx)("button", {
                        type: "button",
                        className:
                          "btn " +
                          ("office" === s ? "btn-primary" : "btn-secondary"),
                        onClick: () => a("office"),
                        children: "Office Details",
                      }),
                      Object(F.jsx)("button", {
                        type: "button",
                        className:
                          "btn " +
                          ("bank" === s ? "btn-primary" : "btn-secondary"),
                        onClick: () => a("bank"),
                        children: "Bank Details",
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "card mb-4",
                    children: Object(F.jsxs)("div", {
                      className: "card-body row",
                      children: [
                        Object(F.jsx)("div", {
                          className: "col-md-3",
                          children: Object(F.jsx)("img", {
                            className: "img-fluid img-thumbnail",
                            src: e.image,
                            alt: `${e.name}'s profile`,
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "col-md-9",
                          children: [
                            "basic" === s &&
                              Object(F.jsxs)(F.Fragment, {
                                children: [
                                  Object(F.jsx)("h4", {
                                    className: "mb-3",
                                    children: "Profile Details",
                                  }),
                                  Object(F.jsx)("div", {
                                    className: "row",
                                    children: Object(F.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Name:",
                                            }),
                                            " ",
                                            e.name,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "DOB:",
                                            }),
                                            " ",
                                            e.dob,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Gender:",
                                            }),
                                            " ",
                                            e.gender,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Address:",
                                            }),
                                            " ",
                                            e.address,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            "office" === s &&
                              Object(F.jsxs)(F.Fragment, {
                                children: [
                                  Object(F.jsx)("h4", {
                                    className: "mb-3",
                                    children: "Office Details",
                                  }),
                                  Object(F.jsx)("div", {
                                    className: "row",
                                    children: Object(F.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Username:",
                                            }),
                                            " ",
                                            e.username,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Email:",
                                            }),
                                            " ",
                                            e.email,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "User Type:",
                                            }),
                                            " ",
                                            e.type,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Status:",
                                            }),
                                            " ",
                                            e.status,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Mobile:",
                                            }),
                                            " ",
                                            e.mobile,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Emp ID:",
                                            }),
                                            " ",
                                            e.empID,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Joining Date:",
                                            }),
                                            " ",
                                            e.joiningDate,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            "bank" === s &&
                              Object(F.jsxs)(F.Fragment, {
                                children: [
                                  Object(F.jsx)("h4", {
                                    className: "mb-3",
                                    children: "Bank Details",
                                  }),
                                  Object(F.jsx)("div", {
                                    className: "row",
                                    children: Object(F.jsxs)("div", {
                                      className: "col-6",
                                      children: [
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Account Number:",
                                            }),
                                            " ",
                                            e.accountNumber,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "Bank Name:",
                                            }),
                                            " ",
                                            e.bankName,
                                          ],
                                        }),
                                        Object(F.jsxs)("p", {
                                          children: [
                                            Object(F.jsx)("strong", {
                                              children: "IFSC:",
                                            }),
                                            " ",
                                            e.IFSC,
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }))
          : Object(F.jsx)("div", { children: "Error loading user details." });
      };
      var J = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice);
        return (
          console.log(e),
          Object(F.jsx)("div", {
            className: "",
            children: Object(F.jsxs)("section", {
              className: "section",
              children: [
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsx)("div", {
                    className: "card-header d-flex justify-content-between",
                    children: Object(F.jsxs)("h4", {
                      children: [
                        "Welcome ",
                        null === e || void 0 === e ? void 0 : e.name,
                      ],
                    }),
                  }),
                }),
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsxs)("div", {
                    className: "card-body row",
                    children: [
                      Object(F.jsx)("div", {
                        className: "col-md-3 ",
                        children: Object(F.jsx)("img", {
                          className: "img-fluid img-thumbnail",
                          src: e.image,
                          alt: "",
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "col-md-9",
                        children: Object(F.jsx)("table", {
                          className: "table",
                          children: Object(F.jsxs)("tbody", {
                            children: [
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Name" }),
                                  Object(F.jsx)("td", { children: e.name }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Username" }),
                                  Object(F.jsx)("td", { children: e.username }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Email" }),
                                  Object(F.jsx)("td", { children: e.email }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Usertype" }),
                                  Object(F.jsx)("td", { children: e.type }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Status" }),
                                  Object(F.jsx)("td", { children: e.status }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Mobile" }),
                                  Object(F.jsx)("td", { children: e.mobile }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Address" }),
                                  Object(F.jsx)("td", { children: e.address }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      };
      var G = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice);
        return Object(F.jsx)("div", {
          className: "main-content",
          children: Object(F.jsxs)("section", {
            className: "section",
            children: [
              Object(F.jsx)(U, { title: "Dashboard" }),
              "Admin" === e.type
                ? Object(F.jsx)(q, {})
                : "Leader" === e.type
                ? Object(F.jsx)(J, {})
                : Object(F.jsx)(W, {}),
            ],
          }),
        });
      };
      var z = () =>
        Object(F.jsx)(F.Fragment, {
          children: Object(F.jsx)("div", {
            id: "app",
            children: Object(F.jsx)("div", {
              className: "main-wrapper",
              children: Object(F.jsx)(G, {}),
            }),
          }),
        });
      s(35);
      var K = () =>
        Object(F.jsx)("div", {
          className: "main-content",
          children: Object(F.jsx)("div", {
            className: "section",
            children: Object(F.jsx)("div", {
              className: "loading",
              style: {
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
              },
              children: Object(F.jsxs)("div", {
                className: "loader m-4",
                style: {
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "90vh",
                },
                children: [
                  Object(F.jsx)("div", {
                    class: "spinner-grow",
                    role: "status",
                    children: Object(F.jsx)("span", {
                      class: "sr-only",
                      children: "Loading...",
                    }),
                  }),
                  "Loading...",
                ],
              }),
            }),
          }),
        });
      var V = (e) => {
        let { index: t, data: s } = e;
        const { user: c } = Object(S.c)((e) => e.authSlice);
        return (
          console.log(c),
          Object(F.jsxs)("tr", {
            children: [
              Object(F.jsx)("td", { children: t }),
              Object(F.jsx)("td", {
                children: Object(F.jsxs)("figure", {
                  className: "avatar",
                  children: [
                    " ",
                    Object(F.jsx)("img", { src: s.image, alt: s.name }),
                    " ",
                  ],
                }),
              }),
              Object(F.jsx)("td", { children: s.name }),
              Object(F.jsx)("td", { children: s.email }),
              Object(F.jsx)("td", { children: s.mobile }),
              Object(F.jsx)("td", {
                children: Object(F.jsx)("div", {
                  className:
                    "badge " +
                    ("Active" === s.status ? "badge-primary" : "badge-danger"),
                  children: s.status,
                }),
              }),
              "Admin" === c.type
                ? Object(F.jsx)("td", {
                    children: s.team
                      ? Object(F.jsxs)(r.b, {
                          to: `/team/${s.team.id}`,
                          className: "badge  badge-primary",
                          style: { padding: "0px 10px 0px 0px" },
                          children: [
                            Object(F.jsx)("img", {
                              src: s.team.image,
                              className: "avatar avatar-sm mr-2",
                              alt: "Person",
                              width: "96",
                              height: "96",
                            }),
                            s.team.name,
                          ],
                        })
                      : Object(F.jsxs)("div", {
                          className: "badge  badge-light",
                          style: { padding: "0px 10px 0px 0px" },
                          children: [
                            Object(F.jsx)("img", {
                              src: "./assets/icons/team.png",
                              className: "avatar avatar-sm mr-2",
                              alt: "Person",
                              width: "96",
                              height: "96",
                            }),
                            "No Team",
                          ],
                        }),
                  })
                : "",
              "Admin" === c.type
                ? Object(F.jsx)("td", {
                    children: Object(F.jsx)(r.b, {
                      to: `/employee/${s.id}`,
                      className: "btn btn-secondary",
                      children: "Detail",
                    }),
                  })
                : "",
            ],
          })
        );
      };
      var Q = () => {
        const [e, t] = Object(c.useState)(),
          [s, a] = Object(c.useState)(!0);
        return (
          Object(c.useEffect)(() => {
            (async () => {
              const e = await m();
              e.success && (t(e.data), a(!1));
            })();
          }, []),
          Object(F.jsx)(F.Fragment, {
            children: Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsx)(U, { title: "Employees" }),
                  Object(F.jsxs)("div", {
                    className: "card",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card-header",
                        children: Object(F.jsx)("h4", {
                          children: "All Employees",
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "card-body p-0",
                        children: Object(F.jsx)("div", {
                          className: "table-responsive",
                          children: Object(F.jsxs)("table", {
                            className:
                              "table table-striped table-md center-text",
                            children: [
                              Object(F.jsx)("thead", {
                                children: Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", { children: "#" }),
                                    Object(F.jsx)("th", { children: "Image" }),
                                    Object(F.jsx)("th", { children: "Name" }),
                                    Object(F.jsx)("th", { children: "Email" }),
                                    Object(F.jsx)("th", { children: "Mobile" }),
                                    Object(F.jsx)("th", { children: "Status" }),
                                    Object(F.jsx)("th", { children: "Team" }),
                                    Object(F.jsx)("th", { children: "Action" }),
                                  ],
                                }),
                              }),
                              Object(F.jsx)("tbody", {
                                children:
                                  !s &&
                                  e &&
                                  e.map((e, t) =>
                                    Object(F.jsx)(
                                      V,
                                      { index: t + 1, data: e },
                                      t
                                    )
                                  ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      var X = (e) => {
        let { index: t, data: s } = e;
        return Object(F.jsxs)("tr", {
          children: [
            Object(F.jsx)("td", { children: t }),
            Object(F.jsx)("td", {
              children: Object(F.jsxs)("figure", {
                className: "avatar",
                children: [
                  " ",
                  Object(F.jsx)("img", { src: s.image, alt: s.name }),
                  " ",
                ],
              }),
            }),
            Object(F.jsx)("td", { children: s.name }),
            Object(F.jsx)("td", { children: s.email }),
            Object(F.jsx)("td", { children: s.mobile }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("div", {
                className:
                  "badge " +
                  ("Active" === s.status ? "badge-primary" : "badge-danger"),
                children: s.status,
              }),
            }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)(r.b, {
                to: `/admin/${s.id}`,
                className: "btn btn-secondary",
                children: "Detail",
              }),
            }),
          ],
        });
      };
      var Z = () => {
        const [e, t] = Object(c.useState)(!0),
          [s, a] = Object(c.useState)({});
        return (
          Object(c.useEffect)(() => {
            (async () => {
              const e = await b.get("/admin/admins");
              e.success && (a(e.data), t(!1));
            })();
          }, []),
          Object(F.jsx)(F.Fragment, {
            children: Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsx)(U, { title: "Admins" }),
                  Object(F.jsxs)("div", {
                    className: "card",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card-header",
                        children: Object(F.jsx)("h4", {
                          children: "All Admins",
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "card-body p-0",
                        children: Object(F.jsx)("div", {
                          className: "table-responsive",
                          children: Object(F.jsxs)("table", {
                            className:
                              "table table-striped table-md center-text",
                            children: [
                              Object(F.jsx)("thead", {
                                children: Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", { children: "#" }),
                                    Object(F.jsx)("th", { children: "Image" }),
                                    Object(F.jsx)("th", { children: "Name" }),
                                    Object(F.jsx)("th", { children: "Email" }),
                                    Object(F.jsx)("th", { children: "Mobile" }),
                                    Object(F.jsx)("th", { children: "Status" }),
                                    Object(F.jsx)("th", { children: "Action" }),
                                  ],
                                }),
                              }),
                              Object(F.jsx)("tbody", {
                                children:
                                  !e &&
                                  s &&
                                  s.map((e, t) =>
                                    Object(F.jsx)(
                                      X,
                                      { index: t + 1, data: e },
                                      t
                                    )
                                  ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      var ee = (e) => {
        let { index: t, data: s } = e;
        return Object(F.jsxs)("tr", {
          children: [
            Object(F.jsx)("td", { children: t }),
            Object(F.jsx)("td", {
              children: Object(F.jsxs)("figure", {
                className: "avatar",
                children: [
                  " ",
                  Object(F.jsx)("img", { src: s.image, alt: s.name }),
                  " ",
                ],
              }),
            }),
            Object(F.jsx)("td", { children: s.name }),
            Object(F.jsx)("td", {
              children: s.leader
                ? Object(F.jsxs)(r.b, {
                    to: "/",
                    className: "badge  badge-primary",
                    style: { padding: "0px 10px 0px 0px" },
                    children: [
                      Object(F.jsx)("img", {
                        src: s.leader.image,
                        className: "avatar avatar-sm mr-2",
                        alt: "Person",
                        width: "96",
                        height: "96",
                      }),
                      s.leader.name,
                    ],
                  })
                : Object(F.jsxs)("div", {
                    className: "badge  badge-light",
                    style: { padding: "0px 10px 0px 0px" },
                    children: [
                      Object(F.jsx)("img", {
                        src: "/assets/icons/user.png",
                        className: "avatar avatar-sm mr-2",
                        alt: "data",
                        width: "96",
                        height: "96",
                      }),
                      "No Leader",
                    ],
                  }),
            }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("div", {
                className:
                  "badge " +
                  ("Active" === s.status ? "badge-primary" : "badge-danger"),
                children: s.status,
              }),
            }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)(r.b, {
                to: `/team/${s.id}`,
                className: "btn btn-secondary",
                children: "Detail",
              }),
            }),
          ],
        });
      };
      const { createSlice: te } = s(15),
        se = te({
          name: "teamSice",
          initialState: {
            team: { leader: null, information: { employee: 0 } },
          },
          reducers: {
            setTeam: (e, t) => {
              e.team = t.payload;
            },
            setTeamLeader: (e, t) => {
              e.team.leader = t.payload;
            },
            setTeamInformation: (e, t) => {
              e.team.information = t.payload;
            },
            updateEmployeeCount: (e, t) => {
              "INCREMENT" === t.payload
                ? (e.team.information.employee =
                    e.team.information.employee + 1)
                : "DECREMENT" === t.payload
                ? (e.team.information.employee =
                    e.team.information.employee - 1)
                : console.log("No Matching Action Found");
            },
          },
        }),
        {
          setTeam: ce,
          setTeamInformation: ae,
          updateEmployeeCount: ne,
          setTeamLeader: le,
        } = se.actions;
      var ie = se.reducer;
      const re = Object(A.createSlice)({
          name: "userSlice",
          initialState: {
            freeEmployees: null,
            freeLeaders: null,
            teamMembers: null,
          },
          reducers: {
            setFreeEmployees: (e, t) => {
              e.freeEmployees = t.payload;
            },
            setTeamMembers: (e, t) => {
              e.teamMembers = t.payload;
            },
            setFreeLeaders: (e, t) => {
              e.freeLeaders = t.payload;
            },
          },
        }),
        {
          setFreeEmployees: de,
          setTeamMembers: je,
          setFreeLeaders: be,
        } = re.actions;
      var oe = re.reducer;
      var me = () => {
          const e = Object(S.b)();
          e(ce(null)), e(je(null));
          const [t, s] = Object(c.useState)(!0),
            [a, n] = Object(c.useState)({});
          return (
            Object(c.useEffect)(() => {
              (async () => {
                const e = await b.get("/admin/teams");
                e.success && (n(e.data), s(!1));
              })();
            }, []),
            Object(F.jsx)(F.Fragment, {
              children: Object(F.jsx)("div", {
                className: "main-content",
                children: Object(F.jsxs)("section", {
                  className: "section",
                  children: [
                    Object(F.jsx)(U, { title: "Teams" }),
                    Object(F.jsxs)("div", {
                      className: "card",
                      children: [
                        Object(F.jsx)("div", {
                          className: "card-header",
                          children: Object(F.jsx)("h4", {
                            children: "All Teams",
                          }),
                        }),
                        Object(F.jsx)("div", {
                          className: "card-body p-0",
                          children: Object(F.jsx)("div", {
                            className: "table-responsive",
                            children: Object(F.jsxs)("table", {
                              className:
                                "table table-striped table-md center-text",
                              children: [
                                Object(F.jsx)("thead", {
                                  children: Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", { children: "#" }),
                                      Object(F.jsx)("th", {
                                        children: "Image",
                                      }),
                                      Object(F.jsx)("th", { children: "Name" }),
                                      Object(F.jsx)("th", {
                                        children: "Leader",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Status",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Action",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(F.jsx)("tbody", {
                                  children:
                                    !t &&
                                    a &&
                                    a.map((e, t) =>
                                      Object(F.jsx)(
                                        ee,
                                        { index: t + 1, data: e },
                                        t
                                      )
                                    ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        he = s(32),
        xe = s.n(he);
      var Oe = (e) => {
        let { close: t, title: s, children: a, width: n } = e;
        const [l, i] = Object(c.useState)(window.innerWidth);
        console.log(l);
        const r = () => {
          i(window.innerWidth);
        };
        return (
          Object(c.useEffect)(
            () => (
              window.addEventListener("resize", r),
              () => window.removeEventListener("resize", r)
            )
          ),
          Object(F.jsx)("div", {
            className: `${xe.a.modalMask}`,
            children: Object(F.jsxs)("div", {
              className: `card ${xe.a.modalBody}`,
              style: { width: l > 800 ? n : "" },
              children: [
                Object(F.jsxs)("div", {
                  className: "card-header justify-content-between",
                  children: [
                    Object(F.jsx)("h4", { children: s }),
                    Object(F.jsx)("button", {
                      className: "btn",
                      onClick: t,
                      children: Object(F.jsx)("i", {
                        className: "fas fa-times",
                      }),
                    }),
                  ],
                }),
                Object(F.jsx)("div", {
                  className: "card-body p-0",
                  children: a,
                }),
              ],
            }),
          })
        );
      };
      var pe = () => {
        const [e, t] = Object(c.useState)("/assets/icons/user.png"),
          s = {
            empID: "",
            name: "",
            email: "",
            mobile: "",
            password: "",
            type: "Employee",
            address: "",
            profile: "",
            accountNumber: "",
            bankName: "",
            IFSC: "",
            adminPassword: "",
            dob: "",
            joiningDate: "",
            gender: "",
          },
          [a, n] = Object(c.useState)(s),
          [l, i] = Object(c.useState)(!1),
          r = (e) => {
            const { name: t, value: s } = e.target;
            n((e) => ({ ...e, [t]: s }));
          },
          d = { marginBottom: "15px" };
        return Object(F.jsxs)(F.Fragment, {
          children: [
            l &&
              Object(F.jsxs)(Oe, {
                close: () => i((e) => !e),
                title: "Add Admin",
                width: "35%",
                children: [
                  Object(F.jsxs)("div", {
                    className: "row",
                    style: { margin: "20px" },
                    children: [
                      Object(F.jsx)("div", {
                        className: "col col-md-4",
                        children: Object(F.jsx)("div", {
                          className:
                            "input-group justify-content-center text-center",
                          children: Object(F.jsx)("img", {
                            className: "rounded",
                            src: e,
                            width: "120",
                            alt: "",
                          }),
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "col col-md-8",
                        children: Object(F.jsx)("table", {
                          className: "table table-md",
                          children: Object(F.jsxs)("tbody", {
                            children: [
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Name" }),
                                  Object(F.jsx)("td", { children: a.name }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Email" }),
                                  Object(F.jsx)("td", { children: a.email }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", {
                                    children: "User Type",
                                  }),
                                  Object(F.jsx)("td", { children: a.type }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(F.jsxs)("div", {
                    className: "form-group col-md-12",
                    children: [
                      Object(F.jsx)("label", {
                        children: "Enter Your Password",
                      }),
                      Object(F.jsxs)("div", {
                        className: "input-group",
                        children: [
                          Object(F.jsx)("div", {
                            className: "input-group-prepend",
                            children: Object(F.jsx)("div", {
                              className: "input-group-text",
                              children: Object(F.jsx)("i", {
                                className: "fas fa-lock",
                              }),
                            }),
                          }),
                          Object(F.jsx)("input", {
                            onChange: r,
                            value: a.adminPassword,
                            type: "password",
                            placeholder: `Enter Your Password To Add ${a.name} As An Admin`,
                            id: "adminPassword",
                            name: "adminPassword",
                            className: "form-control",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "justify-content-center text-center mb-3",
                    children: Object(F.jsxs)("button", {
                      className: "btn btn-primary btn-lg",
                      type: "submit",
                      form: "addUserForm",
                      style: { width: "30vh" },
                      children: ["Add ", a.type],
                    }),
                  }),
                ],
              }),
            Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsx)(U, { title: "Add User" }),
                  Object(F.jsx)("div", {
                    className: "card",
                    children: Object(F.jsxs)("div", {
                      className: "card-body pr-5 pl-5 m-1",
                      children: [
                        Object(F.jsx)("h4", { children: "Basic Details" }),
                        Object(F.jsxs)("form", {
                          className: "row",
                          onSubmit: async (e) => {
                            e.preventDefault();
                            const {
                              empID: c,
                              name: r,
                              email: d,
                              mobile: o,
                              password: m,
                              type: h,
                              address: x,
                              profile: O,
                              accountNumber: p,
                              bankName: u,
                              IFSC: v,
                              dob: N,
                              joiningDate: g,
                              gender: f,
                            } = a;
                            if (
                              !c ||
                              !r ||
                              !d ||
                              !o ||
                              !m ||
                              !h ||
                              !x ||
                              !p ||
                              !u ||
                              !v ||
                              !N ||
                              !g ||
                              !f
                            )
                              return j.b.error("All fields are required");
                            if (!O) return j.b.error("Please choose an image");
                            if ("Admin" === h && !l) return void i(!0);
                            const y = new FormData();
                            Object.keys(a).forEach((e) => {
                              y.append(e, a[e]);
                            });
                            const { success: w, message: S } = await ((A = y),
                            b.post("/admin/user", A));
                            var A;
                            w
                              ? (j.b.success(S),
                                i(!1),
                                n({ ...s }),
                                t("/assets/icons/user.png"))
                              : j.b.error(S || "Failed to add user");
                          },
                          id: "addUserForm",
                          children: [
                            Object(F.jsx)("div", {
                              className: "form-group col-md-12 text-center",
                              children: Object(F.jsxs)("div", {
                                className: "input-group justify-content-center",
                                children: [
                                  Object(F.jsx)("input", {
                                    type: "file",
                                    id: "profile",
                                    name: "profile",
                                    className: "form-control d-none",
                                    onChange: (e) => {
                                      const s = e.target.files[0];
                                      n((e) => ({ ...e, profile: s }));
                                      const c = new FileReader();
                                      c.readAsDataURL(s),
                                        (c.onloadend = () => {
                                          t(c.result);
                                        });
                                    },
                                    accept: "image/*",
                                  }),
                                  Object(F.jsx)("label", {
                                    htmlFor: "profile",
                                    children: Object(F.jsx)("img", {
                                      className: "rounded",
                                      src: e,
                                      width: "120",
                                      alt: "",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-6",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Enter Name",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-user",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.name,
                                      type: "text",
                                      id: "name",
                                      name: "name",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-6",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Enter Email",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-envelope",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.email,
                                      type: "email",
                                      id: "email",
                                      name: "email",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-4",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Enter Mobile Number",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-phone",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.mobile,
                                      type: "number",
                                      id: "mobile",
                                      name: "mobile",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-4",
                              style: d,
                              children: [
                                Object(F.jsx)("label", { children: "Gender" }),
                                Object(F.jsxs)("select", {
                                  id: "gender",
                                  name: "gender",
                                  value: a.gender,
                                  onChange: r,
                                  className: "form-control",
                                  children: [
                                    Object(F.jsx)("option", {
                                      value: "",
                                      children: "Select Gender",
                                    }),
                                    Object(F.jsx)("option", {
                                      value: "Male",
                                      children: "Male",
                                    }),
                                    Object(F.jsx)("option", {
                                      value: "Female",
                                      children: "Female",
                                    }),
                                    Object(F.jsx)("option", {
                                      value: "Other",
                                      children: "Other",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-4",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Date of Birth",
                                }),
                                Object(F.jsx)("input", {
                                  onChange: r,
                                  value: a.dob,
                                  type: "date",
                                  id: "dob",
                                  name: "dob",
                                  className: "form-control",
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-12",
                              style: d,
                              children: [
                                Object(F.jsx)("label", { children: "Address" }),
                                Object(F.jsx)("textarea", {
                                  onChange: r,
                                  value: a.address,
                                  id: "address",
                                  name: "address",
                                  className: "form-control",
                                  rows: "3",
                                }),
                              ],
                            }),
                            Object(F.jsx)("h4", { children: "office details" }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-6",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Employee ID",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-id-card",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.empID,
                                      type: "text",
                                      id: "empID",
                                      name: "empID",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-4",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Enter Password",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-lock",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.password,
                                      type: "password",
                                      id: "password",
                                      name: "password",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-4",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "User Type",
                                }),
                                Object(F.jsxs)("select", {
                                  id: "type",
                                  name: "type",
                                  value: a.type,
                                  onChange: r,
                                  className: "form-control",
                                  children: [
                                    Object(F.jsx)("option", {
                                      value: "",
                                      children: "SelectUser",
                                    }),
                                    Object(F.jsx)("option", {
                                      value: "Employee",
                                      children: "Employee",
                                    }),
                                    Object(F.jsx)("option", {
                                      value: "Admin",
                                      children: "Admin",
                                    }),
                                    Object(F.jsx)("option", {
                                      value: "leader",
                                      children: "leader",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-4",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Joining Date",
                                }),
                                Object(F.jsx)("input", {
                                  onChange: r,
                                  value: a.joiningDate,
                                  type: "date",
                                  id: "joiningDate",
                                  name: "joiningDate",
                                  className: "form-control",
                                }),
                              ],
                            }),
                            Object(F.jsx)("h4", { children: "basic details" }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-6",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Account Number",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-university",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.accountNumber,
                                      type: "text",
                                      id: "accountNumber",
                                      name: "accountNumber",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-6",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "Bank Name",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-university",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.bankName,
                                      type: "text",
                                      id: "bankName",
                                      name: "bankName",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className: "form-group col-md-6",
                              style: d,
                              children: [
                                Object(F.jsx)("label", {
                                  children: "IFSC Code",
                                }),
                                Object(F.jsxs)("div", {
                                  className: "input-group",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className: "input-group-prepend",
                                      children: Object(F.jsx)("div", {
                                        className: "input-group-text",
                                        children: Object(F.jsx)("i", {
                                          className: "fas fa-university",
                                        }),
                                      }),
                                    }),
                                    Object(F.jsx)("input", {
                                      onChange: r,
                                      value: a.IFSC,
                                      type: "text",
                                      id: "IFSC",
                                      name: "IFSC",
                                      className: "form-control",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsx)("div", {
                              className: "col-md-12 text-center",
                              children: Object(F.jsx)("button", {
                                className: "btn btn-success",
                                type: "submit",
                                style: { width: "200px" },
                                children: "Add User",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var ue = () => {
        const e = { name: "", description: "", image: "" },
          [t, s] = Object(c.useState)("/assets/icons/team.png"),
          [a, n] = Object(c.useState)(e),
          l = (e) => {
            const { name: t, value: s } = e.target;
            n((e) => ({ ...e, [t]: s }));
          };
        return Object(F.jsx)(F.Fragment, {
          children: Object(F.jsx)("div", {
            className: "main-content",
            children: Object(F.jsxs)("section", {
              className: "section",
              children: [
                Object(F.jsx)(U, { title: "Add User" }),
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsx)("div", {
                    className: "card-body pr-5 pl-5 m-1",
                    children: Object(F.jsxs)("form", {
                      className: "row",
                      onSubmit: async (t) => {
                        t.preventDefault();
                        const { name: c, description: l } = a;
                        if (!c || !l) return j.b.error("All Field Required");
                        const i = new FormData();
                        Object.keys(a).map((e) => i.append(e, a[e]));
                        const r = await ((d = i), b.post("/admin/team", d));
                        var d;
                        r.success &&
                          (n({ ...e }),
                          s("/assets/icons/team.png"),
                          j.b.success(r.message));
                      },
                      children: [
                        Object(F.jsx)("div", {
                          className: "form-group col-md-12 text-center",
                          children: Object(F.jsxs)("div", {
                            className: "input-group justify-content-center",
                            children: [
                              Object(F.jsx)("input", {
                                type: "file",
                                id: "image",
                                name: "image",
                                className: "form-control d-none",
                                onChange: (e) => {
                                  const t = e.target.files[0];
                                  n((e) => ({ ...e, image: t }));
                                  const c = new FileReader();
                                  c.readAsDataURL(t),
                                    (c.onloadend = () => s(c.result));
                                },
                                accept: "image/*",
                              }),
                              Object(F.jsxs)("label", {
                                htmlFor: "image",
                                children: [
                                  " ",
                                  Object(F.jsx)("img", {
                                    className: "rounded",
                                    src: t,
                                    width: "120",
                                    alt: "",
                                  }),
                                  " ",
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-12",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Team Name",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-user",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: l,
                                  value: a.name,
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-12 ",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Team Description",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-file-alt",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: l,
                                  value: a.description,
                                  type: "text",
                                  id: "description",
                                  name: "description",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsx)("div", {
                          className: "form-group text-center col-md-12",
                          children: Object(F.jsx)("button", {
                            className: "btn btn-primary btn-lg",
                            type: "submit",
                            style: { width: "30vh" },
                            children: "Add Team",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var ve = () => {
          const [e, t] = Object(c.useState)({
              name: "",
              email: "",
              mobile: "",
              image: "",
              address: "",
              status: "",
            }),
            { id: s } = Object(i.useParams)();
          return (
            Object(c.useEffect)(() => {
              (async () => {
                const e = await u(s);
                e.success && t(e.data);
              })();
            }, [s]),
            Object(F.jsx)(F.Fragment, {
              children: Object(F.jsx)("div", {
                className: "main-content",
                children: Object(F.jsxs)("section", {
                  className: "section",
                  children: [
                    Object(F.jsxs)("div", {
                      className:
                        "section-header  d-flex justify-content-between",
                      children: [
                        Object(F.jsx)("h1", { children: "Employee" }),
                        Object(F.jsx)(r.b, {
                          to: `/edituser/${s}`,
                          className: "btn btn-primary",
                          children: "Edit User",
                        }),
                      ],
                    }),
                    Object(F.jsx)("div", {
                      className: "card",
                      children: Object(F.jsxs)("div", {
                        className: "card-body row",
                        children: [
                          Object(F.jsx)("div", {
                            className: "col-md-3 ",
                            children: Object(F.jsx)("img", {
                              className: "img-fluid img-thumbnail",
                              src: e.image,
                              alt: "",
                            }),
                          }),
                          Object(F.jsx)("div", {
                            className: "col-md-9",
                            children: Object(F.jsx)("table", {
                              className: "table",
                              children: Object(F.jsxs)("tbody", {
                                children: [
                                  Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", { children: "Name" }),
                                      Object(F.jsx)("td", { children: e.name }),
                                    ],
                                  }),
                                  Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", {
                                        children: "Email",
                                      }),
                                      Object(F.jsx)("td", {
                                        children: e.email,
                                      }),
                                    ],
                                  }),
                                  Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", {
                                        children: "Mobile",
                                      }),
                                      Object(F.jsx)("td", {
                                        children: e.mobile,
                                      }),
                                    ],
                                  }),
                                  Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", {
                                        children: "Address",
                                      }),
                                      Object(F.jsx)("td", {
                                        children: e.address,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        Ne = s(17),
        ge = s.n(Ne);
      s(62);
      var fe = (e) => {
        let { index: t, data: s } = e;
        const { user: c } = Object(S.c)((e) => e.authSlice),
          a = Object(S.b)(),
          { teamMembers: n, freeEmployees: l } = Object(S.c)(
            (e) => e.userSlice
          ),
          i = async () => {
            const e = await ((e) => b.patch("/admin/team/member/remove", e))({
              userId: s.id,
            });
            e.success &&
              (j.b.success(e.message),
              a(ne("DECREMENT")),
              a(je(n.filter((e) => e.id !== s.id))),
              a(de(l ? [...l, s] : [s])));
          };
        return Object(F.jsxs)("tr", {
          children: [
            Object(F.jsx)("td", { children: t }),
            Object(F.jsx)("td", {
              children: Object(F.jsxs)("figure", {
                className: "avatar",
                children: [
                  " ",
                  Object(F.jsx)("img", { src: s.image, alt: s.name }),
                  " ",
                ],
              }),
            }),
            Object(F.jsx)("td", { children: s.name }),
            Object(F.jsx)("td", { children: s.email }),
            Object(F.jsx)("td", { children: s.mobile }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("div", {
                className:
                  "badge " +
                  ("Active" === s.status ? "badge-primary" : "badge-danger"),
                children: s.status,
              }),
            }),
            "Admin" === c.type
              ? Object(F.jsx)("td", {
                  children: Object(F.jsx)("button", {
                    className: "btn btn-danger",
                    onClick: () => {
                      ge()({
                        title: "Are you sure?",
                        text: `You want to remove!\n${s.name} \nfrom this team`,
                        icon: "warning",
                        buttons: !0,
                        dangerMode: !0,
                      }).then((e) => {
                        e && i();
                      });
                    },
                    children: Object(F.jsx)("i", {
                      className: "fas fa-trash-alt",
                    }),
                  }),
                })
              : Object(F.jsx)("div", {}),
          ],
        });
      };
      var ye = (e) => {
        let { close: t } = e;
        const { user: s } = Object(S.c)((e) => e.authSlice),
          { team: c } = Object(S.c)((e) => e.teamSlice),
          { leader: a } = c,
          n = Object(S.b)(),
          l = async () => {
            const { success: e, message: s } = await ((l = {
              userId: a.id,
              teamId: c.id,
            }),
            b.patch("/admin/team/leader/remove", l));
            var l;
            e && (j.b.success(s), n(le(null)), t());
          };
        return Object(F.jsx)(Oe, {
          close: t,
          title: "Leader Information",
          width: "30%",
          children:
            a &&
            Object(F.jsxs)("div", {
              className: "text-center",
              children: [
                Object(F.jsx)("div", {
                  className: "input-group justify-content-center text-center",
                  children: Object(F.jsx)("img", {
                    className: "rounded",
                    src: a.image,
                    width: "120",
                    alt: "",
                  }),
                }),
                Object(F.jsxs)("table", {
                  className: "table table-md",
                  children: [
                    Object(F.jsxs)("tr", {
                      children: [
                        Object(F.jsx)("th", { children: "Name" }),
                        Object(F.jsx)("td", { children: a.name }),
                      ],
                    }),
                    Object(F.jsxs)("tr", {
                      children: [
                        Object(F.jsx)("th", { children: "Email" }),
                        Object(F.jsx)("td", { children: a.email }),
                      ],
                    }),
                    Object(F.jsxs)("tr", {
                      children: [
                        Object(F.jsx)("th", { children: "Mobile" }),
                        Object(F.jsx)("td", { children: a.mobile }),
                      ],
                    }),
                  ],
                }),
                "Admin" === s.type
                  ? Object(F.jsx)("button", {
                      onClick: () => {
                        ge()({
                          title: "Are you sure?",
                          text: `You want to remove Leader !\n${a.name} \nto lead the team`,
                          icon: "warning",
                          buttons: !0,
                          dangerMode: !0,
                        }).then((e) => {
                          e && l();
                        });
                      },
                      className: "btn btn-danger mb-4",
                      children: "Remove",
                    })
                  : Object(F.jsx)("div", {}),
              ],
            }),
        });
      };
      var we = (e) => {
        let { index: t, data: s } = e;
        const { team: c } = Object(S.c)((e) => e.teamSlice),
          a = Object(S.b)(),
          n = async () => {
            const e = await ((e) => b.patch("/admin/team/leader/add", e))({
              userId: s.id,
              teamId: c.id,
            });
            e.success &&
              (j.b.success(e.message), console.log("data" + s), a(le(s)));
          };
        return Object(F.jsxs)("tr", {
          children: [
            Object(F.jsx)("td", { children: t }),
            Object(F.jsx)("td", {
              children: Object(F.jsxs)("figure", {
                className: "avatar",
                children: [
                  " ",
                  Object(F.jsx)("img", { src: s.image, alt: s.name }),
                  " ",
                ],
              }),
            }),
            Object(F.jsx)("td", { children: s.name }),
            Object(F.jsx)("td", { children: s.email }),
            Object(F.jsx)("td", { children: s.mobile }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("div", {
                className:
                  "badge " +
                  ("Active" === s.status ? "badge-primary" : "badge-danger"),
                children: s.status,
              }),
            }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("button", {
                className: "btn btn-success",
                onClick: () => {
                  ge()({
                    title: "Are you sure?",
                    text: `You want to make!\n${s.name} \nto the Leader of the Team`,
                    icon: "warning",
                    buttons: !0,
                    dangerMode: !0,
                  }).then((e) => {
                    e && n();
                  });
                },
                children: Object(F.jsx)("i", { className: "fas fa-plus" }),
              }),
            }),
          ],
        });
      };
      var Se = (e) => {
        let { close: t } = e;
        const { freeLeaders: s } = Object(S.c)((e) => e.userSlice);
        return Object(F.jsx)(Oe, {
          close: t,
          title: "Set Leader",
          children: Object(F.jsxs)("table", {
            className: "table table-striped table-md center-text table-striped",
            children: [
              Object(F.jsx)("thead", {
                children: Object(F.jsxs)("tr", {
                  children: [
                    Object(F.jsx)("th", { children: "#" }),
                    Object(F.jsx)("th", { children: "Image" }),
                    Object(F.jsx)("th", { children: "Name" }),
                    Object(F.jsx)("th", { children: "Email" }),
                    Object(F.jsx)("th", { children: "Mobile" }),
                    Object(F.jsx)("th", { children: "Status" }),
                    Object(F.jsx)("th", { children: "Action" }),
                  ],
                }),
              }),
              Object(F.jsx)("tbody", {
                children:
                  s &&
                  s.map((e, t) =>
                    Object(F.jsx)(we, { index: t + 1, data: e }, t)
                  ),
              }),
            ],
          }),
        });
      };
      var Ae = (e) => {
        let { index: t, data: s } = e;
        const { team: c } = Object(S.c)((e) => e.teamSlice),
          { freeEmployees: a, teamMembers: n } = Object(S.c)(
            (e) => e.userSlice
          ),
          l = Object(S.b)(),
          i = async () => {
            const e = await ((e) => b.patch("/admin/team/member/add", e))({
              userId: s.id,
              teamId: c.id,
            });
            e.success && (j.b.success(e.message), r(s.id));
          },
          r = (e) => {
            l(de(a.filter((t) => t.id !== e))),
              l(je([...n, s])),
              l(ne("INCREMENT"));
          };
        return Object(F.jsxs)("tr", {
          children: [
            Object(F.jsx)("td", { children: t }),
            Object(F.jsx)("td", {
              children: Object(F.jsxs)("figure", {
                className: "avatar",
                children: [
                  " ",
                  Object(F.jsx)("img", { src: s.image, alt: s.name }),
                  " ",
                ],
              }),
            }),
            Object(F.jsx)("td", { children: s.name }),
            Object(F.jsx)("td", { children: s.email }),
            Object(F.jsx)("td", { children: s.mobile }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("div", {
                className:
                  "badge " +
                  ("Active" === s.status ? "badge-primary" : "badge-danger"),
                children: s.status,
              }),
            }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("button", {
                className: "btn btn-success",
                onClick: () => {
                  ge()({
                    title: "Are you sure?",
                    text: `You want to add!\n${s.name} \ninto this team`,
                    icon: "warning",
                    buttons: !0,
                    dangerMode: !0,
                  }).then((e) => {
                    e && i();
                  });
                },
                children: Object(F.jsx)("i", { className: "fas fa-plus" }),
              }),
            }),
          ],
        });
      };
      var De = (e) => {
        let { close: t } = e;
        const { freeEmployees: s } = Object(S.c)((e) => e.userSlice);
        return Object(F.jsx)(Oe, {
          close: t,
          title: "Add Member",
          children: Object(F.jsxs)("table", {
            className: "table table-striped table-md center-text table-striped",
            children: [
              Object(F.jsx)("thead", {
                children: Object(F.jsxs)("tr", {
                  children: [
                    Object(F.jsx)("th", { children: "#" }),
                    Object(F.jsx)("th", { children: "Image" }),
                    Object(F.jsx)("th", { children: "Name" }),
                    Object(F.jsx)("th", { children: "Email" }),
                    Object(F.jsx)("th", { children: "Mobile" }),
                    Object(F.jsx)("th", { children: "Status" }),
                    Object(F.jsx)("th", { children: "Action" }),
                  ],
                }),
              }),
              Object(F.jsx)("tbody", {
                children:
                  s &&
                  s.map((e, t) =>
                    Object(F.jsx)(Ae, { index: t + 1, data: e }, t)
                  ),
              }),
            ],
          }),
        });
      };
      var Ee = () => {
        const e = Object(S.b)(),
          { team: t } = Object(S.c)((e) => e.teamSlice),
          { teamMembers: s } = Object(S.c)((e) => e.userSlice),
          [a, n] = Object(c.useState)(!0),
          [l, d] = Object(c.useState)(!1),
          [j, o] = Object(c.useState)(!1),
          [m, h] = Object(c.useState)(!0),
          [u, v] = Object(c.useState)(!1),
          [N, g] = Object(c.useState)(!1),
          [f, y] = Object(c.useState)(!1),
          { id: w } = Object(i.useParams)();
        Object(c.useEffect)(() => {
          (async () => {
            const t = await p(w);
            t.success && (e(ce(t.data)), e(ae(t.data.information)), n(!1));
            const s = await ((c = w), b.get(`/admin/team/${c}/members`));
            var c;
            s.success && (e(je(s.data)), h(!1));
          })();
        }, [w]);
        const A = async () => {
            if ((v(!u), !l)) {
              const t = await O();
              t.success && e(de(t.data)), d(!0);
            }
          },
          D = async () => {
            if ((y(!f), !j)) {
              const t = await x();
              t.success && e(be(t.data)), o(!0);
            }
          },
          E = () => {
            g(!N);
          };
        return Object(F.jsxs)(F.Fragment, {
          children: [
            u && Object(F.jsx)(De, { close: A }),
            N && Object(F.jsx)(ye, { close: E }),
            f && Object(F.jsx)(Se, { close: D }),
            Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  t &&
                    Object(F.jsxs)(F.Fragment, {
                      children: [
                        Object(F.jsxs)("div", {
                          className:
                            "section-header  d-flex justify-content-between",
                          children: [
                            Object(F.jsx)("h1", { children: "Team" }),
                            Object(F.jsxs)("div", {
                              children: [
                                Object(F.jsx)(r.b, {
                                  to: `/editteam/${w}`,
                                  className: "btn btn-primary mr-4",
                                  children: "Edit Team",
                                }),
                                Object(F.jsx)("button", {
                                  onClick: A,
                                  className: "btn btn-primary",
                                  children: "Add Member",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                          ],
                        }),
                        Object(F.jsx)("div", {
                          className: "card",
                          children: Object(F.jsxs)("div", {
                            className: "card-body row",
                            children: [
                              Object(F.jsx)("div", {
                                className: "col-md-3 ",
                                children: Object(F.jsx)("img", {
                                  className: "img-fluid img-thumbnail",
                                  src: t.image,
                                  alt: "",
                                }),
                              }),
                              Object(F.jsx)("div", {
                                className: "col-md-9",
                                children: Object(F.jsx)("table", {
                                  className: "table",
                                  children: Object(F.jsxs)("tbody", {
                                    children: [
                                      Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "Name",
                                          }),
                                          Object(F.jsx)("td", {
                                            children: t.name,
                                          }),
                                        ],
                                      }),
                                      Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "Description",
                                          }),
                                          Object(F.jsx)("td", {
                                            children: t.description,
                                          }),
                                        ],
                                      }),
                                      Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "Leader",
                                          }),
                                          Object(F.jsx)("td", {
                                            children: t.leader
                                              ? Object(F.jsxs)("button", {
                                                  className:
                                                    "badge btn badge-primary",
                                                  onClick: E,
                                                  style: {
                                                    padding: "0px 10px 0px 0px",
                                                  },
                                                  children: [
                                                    Object(F.jsx)("img", {
                                                      src: t.leader.image,
                                                      className:
                                                        "avatar avatar-sm mr-2",
                                                      alt: "Person",
                                                      width: "96",
                                                      height: "96",
                                                    }),
                                                    t.leader.name,
                                                  ],
                                                })
                                              : Object(F.jsxs)("button", {
                                                  onClick: D,
                                                  className:
                                                    "badge badge-light btn",
                                                  style: {
                                                    padding: "0px 10px 0px 0px",
                                                  },
                                                  children: [
                                                    Object(F.jsx)("img", {
                                                      src: "../assets/icons/user.png",
                                                      className:
                                                        "avatar avatar-sm mr-2",
                                                      alt: "Person",
                                                    }),
                                                    "No Leader",
                                                  ],
                                                }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  !m &&
                    Object(F.jsxs)("div", {
                      className: "card",
                      children: [
                        Object(F.jsx)("div", {
                          className: "card-header",
                          children: Object(F.jsx)("h4", {
                            children: "All Employees",
                          }),
                        }),
                        Object(F.jsx)("div", {
                          className: "card-body p-0",
                          children: Object(F.jsx)("div", {
                            className: "table-responsive",
                            children: Object(F.jsxs)("table", {
                              className:
                                "table table-striped table-md center-text",
                              children: [
                                Object(F.jsx)("thead", {
                                  children: Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", { children: "#" }),
                                      Object(F.jsx)("th", {
                                        children: "Image",
                                      }),
                                      Object(F.jsx)("th", { children: "Name" }),
                                      Object(F.jsx)("th", {
                                        children: "Email",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Mobile",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Status",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Action",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(F.jsx)("tbody", {
                                  children:
                                    !a &&
                                    s &&
                                    s.map((e, t) =>
                                      Object(F.jsx)(
                                        fe,
                                        { index: t + 1, data: e },
                                        t
                                      )
                                    ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        });
      };
      var ke = () => {
        const [e, t] = Object(c.useState)("/assets/icons/user.png"),
          [s, a] = Object(c.useState)({
            name: "",
            email: "",
            mobile: "",
            password: "",
            type: "",
            address: "",
            profile: "",
            status: "",
          }),
          [n, l] = Object(c.useState)(!1),
          [r, d] = Object(c.useState)({}),
          [o, m] = Object(c.useState)("User"),
          { id: h } = Object(i.useParams)();
        Object(c.useEffect)(() => {
          (async () => {
            const e = await u(h);
            e.success && (m(e.data.type), a(e.data), t(e.data.image));
          })();
        }, [h]);
        const x = (e) => {
          const { name: t, value: s } = e.target;
          a((e) => ({ ...e, [t]: s })), d((e) => ({ ...e, [t]: s }));
        };
        return Object(F.jsxs)(F.Fragment, {
          children: [
            n &&
              Object(F.jsxs)(Oe, {
                close: () => l(!n),
                title: "Update User",
                width: "35%",
                children: [
                  Object(F.jsxs)("div", {
                    className: "row",
                    style: { margin: "20px" },
                    children: [
                      Object(F.jsx)("div", {
                        className: "col col-md-4",
                        children: Object(F.jsx)("div", {
                          className:
                            "input-group justify-content-center text-center",
                          children: Object(F.jsx)("img", {
                            className: "rounded",
                            src: e,
                            width: "120",
                            alt: "",
                          }),
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "col col-md-8",
                        children: Object(F.jsxs)("table", {
                          className: "table table-md",
                          children: [
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Name" }),
                                Object(F.jsx)("td", { children: s.name }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Email" }),
                                Object(F.jsx)("td", { children: s.email }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "User Type" }),
                                Object(F.jsx)("td", { children: s.type }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  Object(F.jsxs)("div", {
                    className: "form-group col-md-12",
                    children: [
                      Object(F.jsx)("label", {
                        children: "Enter Your Password",
                      }),
                      Object(F.jsxs)("div", {
                        className: "input-group",
                        children: [
                          Object(F.jsx)("div", {
                            className: "input-group-prepend",
                            children: Object(F.jsx)("div", {
                              className: "input-group-text",
                              children: Object(F.jsx)("i", {
                                className: "fas fa-lock",
                              }),
                            }),
                          }),
                          Object(F.jsx)("input", {
                            onChange: x,
                            value: s.adminPassword,
                            type: "password",
                            placeholder: `Enter Your Password To Change ${s.name}'s Type`,
                            id: "adminPassword",
                            name: "adminPassword",
                            className: "form-control",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "justify-content-center text-center mb-3",
                    children: Object(F.jsxs)("button", {
                      className: "btn btn-primary btn-lg",
                      type: "submit",
                      form: "updateUserForm",
                      style: { width: "30vh" },
                      children: ["Add ", s.type],
                    }),
                  }),
                ],
              }),
            Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsx)(U, { title: `Edit ${o}` }),
                  Object(F.jsx)("div", {
                    className: "card",
                    children: Object(F.jsx)("div", {
                      className: "card-body pr-5 pl-5 m-1",
                      children: Object(F.jsxs)("form", {
                        className: "row",
                        onSubmit: async (e) => {
                          if (
                            (e.preventDefault(),
                            console.log(r.type),
                            console.log(s.type),
                            r.type && !n)
                          )
                            return l(!0);
                          const t = new FormData();
                          Object.keys(r).map((e) => t.append(e, r[e]));
                          const { success: c, message: a } = await ((e, t) =>
                            b.patch(`/admin/user/${e}`, t))(h, t);
                          return (
                            console.log("Update User:", a), c && j.b.success(a)
                          );
                        },
                        id: "updateUserForm",
                        children: [
                          Object(F.jsx)("div", {
                            className: "form-group col-md-12 text-center",
                            children: Object(F.jsxs)("div", {
                              className: "input-group justify-content-center",
                              children: [
                                Object(F.jsx)("input", {
                                  type: "file",
                                  id: "profile",
                                  name: "profile",
                                  className: "form-control d-none",
                                  onChange: (e) => {
                                    const s = e.target.files[0];
                                    a((e) => ({ ...e, profile: s })),
                                      d((e) => ({ ...e, profile: s }));
                                    const c = new FileReader();
                                    c.readAsDataURL(s),
                                      (c.onloadend = () => {
                                        t(c.result);
                                      });
                                  },
                                  accept: "image/*",
                                }),
                                Object(F.jsxs)("label", {
                                  htmlFor: "profile",
                                  children: [
                                    " ",
                                    Object(F.jsx)("img", {
                                      className: "rounded",
                                      src: e,
                                      width: "120",
                                      alt: "",
                                    }),
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-4",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Enter Name",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-user",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: x,
                                    value: s.name,
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-4",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Enter Email",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-envelope",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: x,
                                    value: s.email,
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-4",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Enter Username",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-user-circle",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: x,
                                    value: s.username,
                                    type: "username",
                                    id: "username",
                                    name: "username",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-3",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Enter Mobile Number",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-phone",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: x,
                                    value: s.mobile,
                                    type: "tel",
                                    id: "mobile",
                                    name: "mobile",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-3",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Enter Password",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-lock",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: x,
                                    value: s.password,
                                    type: "password",
                                    id: "password",
                                    name: "password",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-3",
                            children: [
                              Object(F.jsx)("label", { children: "User Type" }),
                              Object(F.jsxs)("select", {
                                name: "type",
                                onChange: x,
                                value: s.type,
                                className: "form-control select2",
                                children: [
                                  Object(F.jsx)("option", {
                                    children: "Employee",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Leader",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Admin",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-3",
                            children: [
                              Object(F.jsx)("label", {
                                children: "User Status",
                              }),
                              Object(F.jsxs)("select", {
                                name: "status",
                                onChange: x,
                                value: s.status,
                                className: "form-control select2",
                                children: [
                                  Object(F.jsx)("option", {
                                    children: "Active",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Banned",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-12 ",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Enter Address",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-map-marker-alt",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: x,
                                    value: s.address,
                                    type: "text",
                                    id: "address",
                                    name: "address",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsx)("div", {
                            className: "form-group text-center col-md-12",
                            children: Object(F.jsxs)("button", {
                              className: "btn btn-primary btn-lg",
                              type: "submit",
                              style: { width: "30vh" },
                              children: ["Update ", o],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var Ce = () => {
        const [e, t] = Object(c.useState)("/assets/icons/team.png"),
          [s, a] = Object(c.useState)({
            name: "",
            description: "",
            image: "",
            status: "",
          }),
          [n, l] = Object(c.useState)({}),
          { id: r } = Object(i.useParams)();
        Object(c.useEffect)(() => {
          (async () => {
            const e = await p(r);
            e.success && (a(e.data), t(e.data.image));
          })();
        }, [r]);
        const d = (e) => {
          const { name: t, value: s } = e.target;
          a((e) => ({ ...e, [t]: s })), l((e) => ({ ...e, [t]: s }));
        };
        return Object(F.jsx)(F.Fragment, {
          children: Object(F.jsx)("div", {
            className: "main-content",
            children: Object(F.jsxs)("section", {
              className: "section",
              children: [
                Object(F.jsx)(U, { title: "Edit Team" }),
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsx)("div", {
                    className: "card-body pr-5 pl-5 m-1",
                    children: Object(F.jsxs)("form", {
                      className: "row",
                      onSubmit: async (e) => {
                        e.preventDefault();
                        const { name: t, description: c } = s;
                        if (!t || !c) return j.b.error("All Fields Required");
                        const a = new FormData();
                        Object.keys(n).map((e) => a.append(e, n[e]));
                        const l = await ((e, t) =>
                          b.post(`/admin/team/${e}`, t))(r, a);
                        return l.success && j.b.success(l.message);
                      },
                      children: [
                        Object(F.jsx)("div", {
                          className: "form-group col-md-12 text-center",
                          children: Object(F.jsxs)("div", {
                            className: "input-group justify-content-center",
                            children: [
                              Object(F.jsx)("input", {
                                type: "file",
                                id: "image",
                                name: "image",
                                className: "form-control d-none",
                                onChange: (e) => {
                                  const s = e.target.files[0];
                                  a((e) => ({ ...e, image: s })),
                                    l((e) => ({ ...e, image: s }));
                                  const c = new FileReader();
                                  c.readAsDataURL(s),
                                    (c.onloadend = () => {
                                      t(c.result);
                                    });
                                },
                                accept: "image/*",
                              }),
                              Object(F.jsxs)("label", {
                                htmlFor: "image",
                                children: [
                                  " ",
                                  Object(F.jsx)("img", {
                                    className: "rounded",
                                    src: e,
                                    width: "120",
                                    alt: "",
                                  }),
                                  " ",
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-6",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Team Name",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-user",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: d,
                                  value: s.name,
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-6",
                          children: [
                            Object(F.jsx)("label", { children: "Team Status" }),
                            Object(F.jsxs)("select", {
                              name: "status",
                              onChange: d,
                              value: s.status,
                              className: "form-control select2",
                              children: [
                                Object(F.jsx)("option", { children: "Active" }),
                                Object(F.jsx)("option", { children: "Banned" }),
                                Object(F.jsx)("option", {
                                  children: "Expired",
                                }),
                                Object(F.jsx)("option", {
                                  children: "Deleted",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-12 ",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Team Description",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-file-alt",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: d,
                                  value: s.description,
                                  type: "text",
                                  id: "description",
                                  name: "description",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsx)("div", {
                          className: "form-group text-center col-md-12",
                          children: Object(F.jsx)("button", {
                            className: "btn btn-primary btn-lg",
                            type: "submit",
                            style: { width: "30vh" },
                            children: "Update Team",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var Fe = () => {
        const [e, t] = Object(c.useState)({
            name: "",
            email: "",
            mobile: "",
            image: "",
            address: "",
            status: "",
          }),
          { id: s } = Object(i.useParams)();
        return (
          Object(c.useEffect)(() => {
            (async () => {
              const e = await u(s);
              e.success && t(e.data);
            })();
          }, [s]),
          Object(F.jsx)(F.Fragment, {
            children: Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsxs)("div", {
                    className: "section-header  d-flex justify-content-between",
                    children: [
                      Object(F.jsx)("h1", { children: "Admin" }),
                      Object(F.jsx)(r.b, {
                        to: `/edituser/${s}`,
                        className: "btn btn-primary",
                        children: "Edit User",
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "card",
                    children: Object(F.jsxs)("div", {
                      className: "card-body row",
                      children: [
                        Object(F.jsx)("div", {
                          className: "col-md-3 ",
                          children: Object(F.jsx)("img", {
                            className: "img-fluid img-thumbnail",
                            src: e.image,
                            alt: "",
                          }),
                        }),
                        Object(F.jsx)("div", {
                          className: "col-md-9",
                          children: Object(F.jsx)("table", {
                            className: "table",
                            children: Object(F.jsxs)("tbody", {
                              children: [
                                Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", { children: "Name" }),
                                    Object(F.jsx)("td", { children: e.name }),
                                  ],
                                }),
                                Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", { children: "Email" }),
                                    Object(F.jsx)("td", { children: e.email }),
                                  ],
                                }),
                                Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", { children: "Mobile" }),
                                    Object(F.jsx)("td", { children: e.mobile }),
                                  ],
                                }),
                                Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", {
                                      children: "Address",
                                    }),
                                    Object(F.jsx)("td", {
                                      children: e.address,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      s(63), s(64), s(65);
      var Le = (e) => {
        let { index: t, data: s } = e;
        return Object(F.jsxs)("tr", {
          children: [
            Object(F.jsx)("td", { children: t }),
            Object(F.jsx)("td", {
              children: Object(F.jsxs)("figure", {
                className: "avatar",
                children: [
                  " ",
                  Object(F.jsx)("img", { src: s.image, alt: s.name }),
                  " ",
                ],
              }),
            }),
            Object(F.jsx)("td", { children: s.name }),
            Object(F.jsx)("td", { children: s.email }),
            Object(F.jsx)("td", { children: s.mobile }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)("div", {
                className:
                  "badge " +
                  ("Active" === s.status ? "badge-primary" : "badge-danger"),
                children: s.status,
              }),
            }),
            Object(F.jsx)("td", {
              children:
                s.team && 0 !== Object.keys(s.team).length
                  ? Object(F.jsxs)(r.b, {
                      to: `/team/${s.team.id}`,
                      className: "badge  badge-primary",
                      style: { padding: "0px 10px 0px 0px" },
                      children: [
                        Object(F.jsx)("img", {
                          src: s.team.image,
                          className: "avatar avatar-sm mr-2",
                          alt: "Person",
                          width: "96",
                          height: "96",
                        }),
                        s.team.name,
                      ],
                    })
                  : Object(F.jsxs)("div", {
                      className: "badge  badge-light",
                      style: { padding: "0px 10px 0px 0px" },
                      children: [
                        Object(F.jsx)("img", {
                          src: "/assets/icons/team.png",
                          className: "avatar avatar-sm mr-2",
                          alt: "Person",
                          width: "96",
                          height: "96",
                        }),
                        "No Team",
                      ],
                    }),
            }),
            Object(F.jsx)("td", {
              children: Object(F.jsx)(r.b, {
                to: `/employee/${s.id}`,
                className: "btn btn-secondary",
                children: "Detail",
              }),
            }),
          ],
        });
      };
      var Re = () => {
        const [e, t] = Object(c.useState)(),
          [s, a] = Object(c.useState)(!0);
        return (
          Object(c.useEffect)(() => {
            (async () => {
              const e = await h();
              e.success && (t(e.data), a(!1));
            })();
          }, []),
          Object(F.jsx)(F.Fragment, {
            children: Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  Object(F.jsx)(U, { title: "Leaders" }),
                  Object(F.jsxs)("div", {
                    className: "card",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card-header",
                        children: Object(F.jsx)("h4", {
                          children: "All Leaders",
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "card-body p-0",
                        children: Object(F.jsx)("div", {
                          className: "table-responsive",
                          children: Object(F.jsxs)("table", {
                            className:
                              "table table-striped table-md center-text",
                            children: [
                              Object(F.jsx)("thead", {
                                children: Object(F.jsxs)("tr", {
                                  children: [
                                    Object(F.jsx)("th", { children: "#" }),
                                    Object(F.jsx)("th", { children: "Image" }),
                                    Object(F.jsx)("th", { children: "Name" }),
                                    Object(F.jsx)("th", { children: "Email" }),
                                    Object(F.jsx)("th", { children: "Mobile" }),
                                    Object(F.jsx)("th", { children: "Status" }),
                                    Object(F.jsx)("th", {
                                      children: "Leading Team",
                                    }),
                                    Object(F.jsx)("th", { children: "Action" }),
                                  ],
                                }),
                              }),
                              Object(F.jsx)("tbody", {
                                children:
                                  !s &&
                                  e &&
                                  e.map((e, t) =>
                                    Object(F.jsx)(
                                      Le,
                                      { index: t + 1, data: e },
                                      t
                                    )
                                  ),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
      var Te = () =>
        Object(F.jsxs)("ul", {
          className: "sidebar-menu",
          children: [
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-home" }),
                  " ",
                  Object(F.jsx)("span", { children: "Dashboard" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/employees",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-users" }),
                  " ",
                  Object(F.jsx)("span", { children: "Employees" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/leaders",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-user-friends" }),
                  " ",
                  Object(F.jsx)("span", { children: "Leaders" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/admins",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-users-cog" }),
                  " ",
                  Object(F.jsx)("span", { children: "Admins" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/teams",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-fire" }),
                  " ",
                  Object(F.jsx)("span", { children: "Teams" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/markAttendance",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-user" }),
                  " ",
                  Object(F.jsx)("span", { children: "Mark Attendance" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/attendance",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-user" }),
                  " ",
                  Object(F.jsx)("span", { children: "Attendance" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/leaves",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-book" }),
                  Object(F.jsx)("span", { children: "Leaves" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/assignSalary",
                children: [
                  Object(F.jsx)("i", { class: "fas fa-pen" }),
                  " ",
                  Object(F.jsx)("span", { children: "Assign Salary" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/salaries",
                children: [
                  Object(F.jsx)("i", { class: "fas fa-piggy-bank" }),
                  " ",
                  Object(F.jsx)("span", { children: "Salaries" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              className: "menu-header",
              children: "Starter",
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/adduser",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-user-plus" }),
                  " ",
                  Object(F.jsx)("span", { children: "Add User" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/addteam",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-address-card" }),
                  " ",
                  Object(F.jsx)("span", { children: "Add Team" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "far fa-square" }),
                  " ",
                  Object(F.jsx)("span", { children: "Blank Page" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              className: "menu-header",
              children: "Settings",
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/contact",
                children: [
                  Object(F.jsx)("i", { className: "fab fa-teamspeak" }),
                  " ",
                  Object(F.jsx)("span", { children: "Contact Us" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/about",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-info-circle" }),
                  " ",
                  Object(F.jsx)("span", { children: "About Us" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-sign-out-alt" }),
                  " ",
                  Object(F.jsx)("span", { children: "Logout" }),
                ],
              }),
            }),
          ],
        });
      var Ie = () =>
        Object(F.jsxs)("ul", {
          className: "sidebar-menu",
          children: [
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-fire" }),
                  " ",
                  Object(F.jsx)("span", { children: "Dashboard" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/members",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-fire" }),
                  " ",
                  Object(F.jsx)("span", { children: "Members" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userAttendance",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-user" }),
                  " ",
                  Object(F.jsx)("span", { children: "Attendance" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/applyforleave",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-pen" }),
                  " ",
                  Object(F.jsx)("span", { children: "Apply For Leave" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userLeaveApplications",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-book" }),
                  " ",
                  Object(F.jsx)("span", { children: "Leave Applications" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userSalary",
                children: [
                  Object(F.jsx)("i", { class: "fas fa-piggy-bank" }),
                  " ",
                  Object(F.jsx)("span", { children: "Salary" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              className: "menu-header",
              children: "Settings",
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/contact",
                children: [
                  Object(F.jsx)("i", { className: "fab fa-teamspeak" }),
                  " ",
                  Object(F.jsx)("span", { children: "Contact Us" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/about",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-info-circle" }),
                  " ",
                  Object(F.jsx)("span", { children: "About Us" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-sign-out-alt" }),
                  " ",
                  Object(F.jsx)("span", { children: "Logout" }),
                ],
              }),
            }),
          ],
        });
      var Pe = () => {
        const e = Object(S.b)(),
          t = Object(i.useHistory)();
        return Object(F.jsxs)("ul", {
          className: "sidebar-menu",
          children: [
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-fire" }),
                  " ",
                  Object(F.jsx)("span", { children: "Dashboard" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userTeams",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-users" }),
                  " ",
                  Object(F.jsx)("span", { children: "Team" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userAttendance",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-user" }),
                  " ",
                  Object(F.jsx)("span", { children: "Attendance" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/applyforleave",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-pen" }),
                  " ",
                  Object(F.jsx)("span", { children: "Apply For Leave" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userLeaveApplications",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-book" }),
                  " ",
                  Object(F.jsx)("span", { children: "Leave Applications" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/userSalary",
                children: [
                  Object(F.jsx)("i", { class: "fas fa-piggy-bank" }),
                  " ",
                  Object(F.jsx)("span", { children: "Salary" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              className: "menu-header",
              children: "Settings",
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/contact",
                children: [
                  Object(F.jsx)("i", { className: "fab fa-teamspeak" }),
                  " ",
                  Object(F.jsx)("span", { children: "Contact me" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                className: "nav-link",
                to: "/about",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-info-circle" }),
                  " ",
                  Object(F.jsx)("span", { children: "About me" }),
                ],
              }),
            }),
            Object(F.jsx)("li", {
              children: Object(F.jsxs)(r.b, {
                onClick: async () => (await o(), e(E(null)), t.push("/login")),
                className: "nav-link",
                to: "/home",
                children: [
                  Object(F.jsx)("i", { className: "fas fa-sign-out-alt" }),
                  " ",
                  Object(F.jsx)("span", { children: "Logout" }),
                ],
              }),
            }),
          ],
        });
      };
      s(66);
      var Me = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice);
        return Object(F.jsxs)("div", {
          className: "main-sidebar",
          children: [
            Object(F.jsx)("div", {
              className: "navbarlogo",
              children: Object(F.jsx)("img", {
                src: "https://www.paisa4you.com/Images/png%20logo.png",
                alt: "Company Logo",
                width: "300",
              }),
            }),
            Object(F.jsxs)("aside", {
              id: "sidebar-wrapper",
              children: [
                Object(F.jsx)("div", {
                  className: "sidebar-brand sidebar-brand-sm",
                  children: Object(F.jsx)(r.b, { to: "/home", children: "TM" }),
                }),
                Object(F.jsx)("div", {
                  className: "sidebar-menu",
                  children:
                    "Admin" === e.type
                      ? Object(F.jsx)(Te, {})
                      : "Leader" === e.type
                      ? Object(F.jsx)(Ie, {})
                      : Object(F.jsx)(Pe, {}),
                }),
                Object(F.jsx)("div", {
                  className: "mt-4 mb-4 p-3 hide-sidebar-mini",
                  children: Object(F.jsxs)("a", {
                    href: "https://mohammad-shoaib-khan.vercel.app/",
                    target: "_blank",
                    className:
                      "btn btn-primary btn-lg btn-block btn-icon-split",
                    rel: "noreferrer",
                    children: [
                      Object(F.jsx)("i", { className: "fas fa-rocket" }),
                      " Mohammad",
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
      var Ue = () => {
        const { name: e, image: t } = Object(S.c)((e) => e.authSlice.user),
          s = Object(S.b)(),
          c = Object(i.useHistory)();
        return Object(F.jsxs)(F.Fragment, {
          children: [
            Object(F.jsx)("div", { className: "navbar-bg" }),
            Object(F.jsxs)("nav", {
              className: "navbar navbar-expand-lg main-navbar",
              children: [
                Object(F.jsxs)("form", {
                  className: "form-inline mr-auto",
                  children: [
                    Object(F.jsxs)("ul", {
                      className: "navbar-nav mr-3",
                      children: [
                        Object(F.jsx)("li", {
                          children: Object(F.jsx)(r.b, {
                            to: "/",
                            id: "sidebarCollapse",
                            "data-toggle": "sidebar",
                            className: "nav-link nav-link-lg",
                            children: Object(F.jsx)("i", {
                              className: "fas fa-bars",
                            }),
                          }),
                        }),
                        Object(F.jsx)("li", {
                          children: Object(F.jsx)(r.b, {
                            to: "/",
                            "data-toggle": "search",
                            className: "nav-link nav-link-lg d-sm-none",
                            children: Object(F.jsx)("i", {
                              className: "fas fa-search",
                            }),
                          }),
                        }),
                      ],
                    }),
                    Object(F.jsxs)("div", {
                      className: "search-element",
                      children: [
                        Object(F.jsx)("input", {
                          className: "form-control",
                          type: "search",
                          placeholder: "Search",
                          "aria-label": "Search",
                          "data-width": "250",
                        }),
                        Object(F.jsx)("button", {
                          className: "btn",
                          type: "submit",
                          children: Object(F.jsx)("i", {
                            className: "fas fa-search",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(F.jsxs)("ul", {
                  className: "navbar-nav navbar-right",
                  children: [
                    Object(F.jsxs)("li", {
                      className: "dropdown dropdown-list-toggle",
                      children: [
                        Object(F.jsx)("a", {
                          href: "#",
                          "data-toggle": "dropdown",
                          className:
                            "nav-link notification-toggle nav-link-lg beep",
                          children: Object(F.jsx)("i", {
                            className: "far fa-bell",
                          }),
                        }),
                        Object(F.jsxs)("div", {
                          className:
                            "dropdown-menu dropdown-list dropdown-menu-right",
                          children: [
                            Object(F.jsxs)("div", {
                              className: "dropdown-header",
                              children: [
                                "Notifications",
                                Object(F.jsx)("div", {
                                  className: "float-right",
                                  children: Object(F.jsx)(r.b, {
                                    to: "/",
                                    children: "Mark All As Read",
                                  }),
                                }),
                              ],
                            }),
                            Object(F.jsxs)("div", {
                              className:
                                "dropdown-list-content dropdown-list-icons",
                              children: [
                                Object(F.jsxs)(r.b, {
                                  to: "/",
                                  className:
                                    "dropdown-item dropdown-item-unread",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className:
                                        "dropdown-item-icon bg-primary text-white",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-code",
                                      }),
                                    }),
                                    Object(F.jsxs)("div", {
                                      className: "dropdown-item-desc",
                                      children: [
                                        "Template update is available now!",
                                        Object(F.jsx)("div", {
                                          className: "time text-primary",
                                          children: "2 Min Ago",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(F.jsxs)(r.b, {
                                  to: "/",
                                  className: "dropdown-item",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className:
                                        "dropdown-item-icon bg-info text-white",
                                      children: Object(F.jsx)("i", {
                                        className: "far fa-user",
                                      }),
                                    }),
                                    Object(F.jsxs)("div", {
                                      className: "dropdown-item-desc",
                                      children: [
                                        Object(F.jsx)("b", { children: "You" }),
                                        " and ",
                                        Object(F.jsx)("b", {
                                          children: "Dedik Sugiharto",
                                        }),
                                        " are now friends",
                                        Object(F.jsx)("div", {
                                          className: "time",
                                          children: "10 Hours Ago",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(F.jsxs)(r.b, {
                                  to: "/",
                                  className: "dropdown-item",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className:
                                        "dropdown-item-icon bg-success text-white",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-check",
                                      }),
                                    }),
                                    Object(F.jsxs)("div", {
                                      className: "dropdown-item-desc",
                                      children: [
                                        Object(F.jsx)("b", {
                                          children: "Kusnaedi",
                                        }),
                                        " has moved task ",
                                        Object(F.jsx)("b", {
                                          children: "Fix bug header",
                                        }),
                                        " to",
                                        " ",
                                        Object(F.jsx)("b", {
                                          children: "Done",
                                        }),
                                        Object(F.jsx)("div", {
                                          className: "time",
                                          children: "12 Hours Ago",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(F.jsxs)(r.b, {
                                  to: "/",
                                  className: "dropdown-item",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className:
                                        "dropdown-item-icon bg-danger text-white",
                                      children: Object(F.jsx)("i", {
                                        className:
                                          "fas fa-exclamation-triangle",
                                      }),
                                    }),
                                    Object(F.jsxs)("div", {
                                      className: "dropdown-item-desc",
                                      children: [
                                        "Low disk space. Let's clean it!",
                                        Object(F.jsx)("div", {
                                          className: "time",
                                          children: "17 Hours Ago",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                Object(F.jsxs)(r.b, {
                                  to: "/",
                                  className: "dropdown-item",
                                  children: [
                                    Object(F.jsx)("div", {
                                      className:
                                        "dropdown-item-icon bg-info text-white",
                                      children: Object(F.jsx)("i", {
                                        className: "fas fa-bell",
                                      }),
                                    }),
                                    Object(F.jsxs)("div", {
                                      className: "dropdown-item-desc",
                                      children: [
                                        "Welcome to Stisla template!",
                                        Object(F.jsx)("div", {
                                          className: "time",
                                          children: "Yesterday",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(F.jsx)("div", {
                              className: "dropdown-footer text-center",
                              children: Object(F.jsxs)(r.b, {
                                to: "/",
                                children: [
                                  "View All ",
                                  Object(F.jsx)("i", {
                                    className: "fas fa-chevron-right",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(F.jsxs)("li", {
                      className: "dropdown",
                      children: [
                        Object(F.jsxs)("a", {
                          href: "#",
                          "data-toggle": "dropdown",
                          className:
                            "nav-link dropdown-toggle nav-link-lg nav-link-user",
                          children: [
                            Object(F.jsx)("img", {
                              alt: "image",
                              src: t,
                              className: "rounded-circle mr-1",
                            }),
                            Object(F.jsxs)("div", {
                              className: "d-sm-none d-lg-inline-block",
                              children: ["Hi, ", e],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "dropdown-menu dropdown-menu-right",
                          children: [
                            Object(F.jsx)("div", {
                              className: "dropdown-title",
                              children: "Logged in 5 min ago",
                            }),
                            Object(F.jsxs)(r.b, {
                              to: "#",
                              className: "dropdown-item has-icon",
                              children: [
                                Object(F.jsx)("i", {
                                  className: "far fa-user",
                                }),
                                " Profile",
                              ],
                            }),
                            Object(F.jsxs)(r.b, {
                              to: "#",
                              className: "dropdown-item has-icon",
                              children: [
                                Object(F.jsx)("i", {
                                  className: "fas fa-bolt",
                                }),
                                " Activities",
                              ],
                            }),
                            Object(F.jsxs)(r.b, {
                              to: "#",
                              className: "dropdown-item has-icon",
                              children: [
                                Object(F.jsx)("i", { className: "fas fa-cog" }),
                                " Settings",
                              ],
                            }),
                            Object(F.jsx)("div", {
                              className: "dropdown-divider",
                            }),
                            Object(F.jsxs)(r.b, {
                              to: "/",
                              onClick: async () => (
                                await o(), s(E(null)), c.push("/login")
                              ),
                              className: "dropdown-item has-icon text-danger",
                              children: [
                                Object(F.jsx)("i", {
                                  className: "fas fa-sign-out-alt",
                                }),
                                " Logout",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var Be = () => {
          const [e, t] = Object(c.useState)(),
            [s, a] = Object(c.useState)(!0);
          return (
            Object(c.useEffect)(() => {
              (async () => {
                const e = await b.get("/leader/team/members");
                e.success && (t(e.data), a(!1));
              })();
            }, []),
            Object(F.jsx)(F.Fragment, {
              children: Object(F.jsx)("div", {
                className: "main-content",
                children: Object(F.jsxs)("section", {
                  className: "section",
                  children: [
                    Object(F.jsx)(U, { title: "Members" }),
                    Object(F.jsxs)("div", {
                      className: "card",
                      children: [
                        Object(F.jsx)("div", {
                          className: "card-header",
                          children: Object(F.jsx)("h4", {
                            children: "All Members",
                          }),
                        }),
                        Object(F.jsx)("div", {
                          className: "card-body p-0",
                          children: Object(F.jsx)("div", {
                            className: "table-responsive",
                            children: Object(F.jsxs)("table", {
                              className:
                                "table table-striped table-md center-text",
                              children: [
                                Object(F.jsx)("thead", {
                                  children: Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", { children: "#" }),
                                      Object(F.jsx)("th", {
                                        children: "Image",
                                      }),
                                      Object(F.jsx)("th", { children: "Name" }),
                                      Object(F.jsx)("th", {
                                        children: "Email",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Mobile",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Status",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(F.jsx)("tbody", {
                                  children:
                                    !s &&
                                    e &&
                                    e.map((e, t) =>
                                      Object(F.jsx)(
                                        V,
                                        { index: t + 1, data: e },
                                        t
                                      )
                                    ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            })
          );
        },
        $e = s(33);
      var _e = () => {
          var e;
          const { user: t } = Object(S.c)((e) => e.authSlice),
            s = Object(S.b)();
          s(ce(null)), s(je(null));
          const [a, n] = Object(c.useState)(!0),
            [l, i] = Object(c.useState)({});
          return (
            Object(c.useEffect)(() => {
              (async (e) => {
                if (
                  null !== t &&
                  void 0 !== t &&
                  null !== (e = t.team) &&
                  void 0 !== e &&
                  e.id
                ) {
                  var s;
                  const e = await y(
                    null === t ||
                      void 0 === t ||
                      null === (s = t.team) ||
                      void 0 === s
                      ? void 0
                      : s.id
                  );
                  e.success && (i(e.data), n(!1));
                }
              })();
            }, []),
            Object(F.jsx)(F.Fragment, {
              children: l
                ? Object(F.jsx)("div", {
                    children: Object(F.jsx)("div", {
                      className: "main-content",
                      children: Object(F.jsx)("section", {
                        className: "section",
                        children: Object(F.jsxs)("div", {
                          className: "card",
                          children: [
                            Object(F.jsx)("div", {
                              className: "card-header",
                              children: Object(F.jsx)("h4", {
                                children: "All Teams",
                              }),
                            }),
                            Object(F.jsx)("div", {
                              className: "card-body p-0",
                              children: Object(F.jsx)("div", {
                                className: "table-responsive",
                                children: Object(F.jsxs)("table", {
                                  className:
                                    "table table-striped table-md center-text",
                                  children: [
                                    Object(F.jsx)("thead", {
                                      children: Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "#",
                                          }),
                                          Object(F.jsx)("th", {
                                            children: "Image",
                                          }),
                                          Object(F.jsx)("th", {
                                            children: "Name",
                                          }),
                                          Object(F.jsx)("th", {
                                            children: "Leader",
                                          }),
                                          Object(F.jsx)("th", {
                                            children: "Status",
                                          }),
                                          Object(F.jsx)("th", {
                                            children: "Action",
                                          }),
                                        ],
                                      }),
                                    }),
                                    Object(F.jsx)("tbody", {
                                      children:
                                        null !== t &&
                                        void 0 !== t &&
                                        null !== (e = t.team) &&
                                        void 0 !== e &&
                                        e.id
                                          ? Object(F.jsxs)("tr", {
                                              children: [
                                                Object(F.jsx)("td", {
                                                  children: "1",
                                                }),
                                                Object(F.jsx)("td", {
                                                  children: Object(F.jsxs)(
                                                    "figure",
                                                    {
                                                      className: "avatar",
                                                      children: [
                                                        " ",
                                                        Object(F.jsx)("img", {
                                                          src: l.image,
                                                          alt: l.name,
                                                        }),
                                                        " ",
                                                      ],
                                                    }
                                                  ),
                                                }),
                                                Object(F.jsx)("td", {
                                                  children: l.name,
                                                }),
                                                Object(F.jsx)("td", {
                                                  children: l.leader
                                                    ? Object(F.jsxs)(
                                                        $e.NavLink,
                                                        {
                                                          to: "/",
                                                          className:
                                                            "badge  badge-primary",
                                                          style: {
                                                            padding:
                                                              "0px 10px 0px 0px",
                                                          },
                                                          children: [
                                                            Object(F.jsx)(
                                                              "img",
                                                              {
                                                                src: l.leader
                                                                  .image,
                                                                className:
                                                                  "avatar avatar-sm mr-2",
                                                                alt: "Person",
                                                                width: "96",
                                                                height: "96",
                                                              }
                                                            ),
                                                            l.leader.name,
                                                          ],
                                                        }
                                                      )
                                                    : Object(F.jsxs)("div", {
                                                        className:
                                                          "badge  badge-light",
                                                        style: {
                                                          padding:
                                                            "0px 10px 0px 0px",
                                                        },
                                                        children: [
                                                          Object(F.jsx)("img", {
                                                            src: "/assets/icons/user.png",
                                                            className:
                                                              "avatar avatar-sm mr-2",
                                                            alt: "data",
                                                            width: "96",
                                                            height: "96",
                                                          }),
                                                          "No Leader",
                                                        ],
                                                      }),
                                                }),
                                                Object(F.jsx)("td", {
                                                  children: Object(F.jsx)(
                                                    "div",
                                                    {
                                                      className:
                                                        "badge " +
                                                        ("Active" === l.status
                                                          ? "badge-primary"
                                                          : "badge-danger"),
                                                      children: l.status,
                                                    }
                                                  ),
                                                }),
                                                Object(F.jsx)("td", {
                                                  children: Object(F.jsx)(
                                                    $e.NavLink,
                                                    {
                                                      to: `/userteam/${l.id}`,
                                                      className:
                                                        "btn btn-primary",
                                                      children: "Detail",
                                                    }
                                                  ),
                                                }),
                                              ],
                                            })
                                          : Object(F.jsx)("div", {}),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
                : Object(F.jsx)(K, {}),
            })
          );
        },
        He = s(39);
      s(67);
      var Ye = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice),
          [t, s] = Object(c.useState)([]),
          [a, n] = Object(c.useState)(new Date()),
          [l, i] = Object(c.useState)(null);
        Object(c.useEffect)(() => {
          (async () => {
            try {
              const c = new Date(),
                a = {
                  employeeID: e.id,
                  year: c.getFullYear(),
                  month: c.getMonth() + 1,
                },
                n = await ((t = a),
                b.post("/employee/view-employee-attendance", t));
              n.success
                ? (s(n.data), console.log("Attendance data set:", n.data))
                : i("No attendance data found");
            } catch (l) {
              i("Failed to fetch attendance data"),
                console.error("Failed to fetch attendance data", l);
            }
            var t;
          })();
        }, [e.id]);
        const r = (() => {
          const e = { Present: 0, "Half Day": 0, Absent: 0 };
          return (
            t.forEach((t) => {
              t.status in e && (e[t.status] += 1);
            }),
            e
          );
        })();
        return Object(F.jsxs)("div", {
          className: "main-content",
          style: {
            height: "80vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          children: [
            l &&
              Object(F.jsx)("div", {
                style: { color: "red", textAlign: "center", margin: "20px" },
                children: l,
              }),
            t.length > 0
              ? Object(F.jsxs)("div", {
                  style: {
                    margin: "20px auto",
                    maxWidth: "1200px",
                    width: "100%",
                  },
                  children: [
                    Object(F.jsxs)("div", {
                      style: {
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "20px",
                        marginBottom: "20px",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                        textAlign: "center",
                        backgroundColor: "#f9f9f9",
                      },
                      children: [
                        Object(F.jsx)("h3", {
                          children: "Monthly Attendance Summary",
                        }),
                        Object(F.jsxs)("div", {
                          style: {
                            display: "flex",
                            justifyContent: "space-around",
                          },
                          children: [
                            Object(F.jsx)("div", {
                              style: { textAlign: "center" },
                              children: Object(F.jsxs)("p", {
                                style: { color: "green", fontWeight: "bold" },
                                children: ["Present: ", r.Present],
                              }),
                            }),
                            Object(F.jsx)("div", {
                              style: { textAlign: "center" },
                              children: Object(F.jsxs)("p", {
                                style: { color: "orange", fontWeight: "bold" },
                                children: ["Half Day: ", r["Half Day"]],
                              }),
                            }),
                            Object(F.jsx)("div", {
                              style: { textAlign: "center" },
                              children: Object(F.jsxs)("p", {
                                style: { color: "red", fontWeight: "bold" },
                                children: ["Absent: ", r.Absent],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(F.jsx)(He.a, {
                      value: a,
                      onChange: n,
                      className: "custom-calendar",
                      tileContent: (e) => {
                        let { date: s, view: c } = e;
                        if ("month" === c) {
                          const e = ((e) => {
                            if (0 === t.length) return null;
                            const s = e.getDate(),
                              c = e.getMonth() + 1,
                              a = e.getFullYear(),
                              n = t.find(
                                (e) =>
                                  e.date === s && e.month === c && e.year === a
                              );
                            return n ? n.status : "";
                          })(s);
                          let c = "white";
                          if (e)
                            switch (e) {
                              case "Present":
                                c = "green";
                                break;
                              case "Absent":
                                c = "red";
                                break;
                              case "Half Day":
                                c = "yellow";
                                break;
                              default:
                                c = "white";
                            }
                          return Object(F.jsx)("div", {
                            style: {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              backgroundColor: c,
                              borderRadius: "4px",
                            },
                          });
                        }
                        return null;
                      },
                      style: { width: "100%", height: "500px" },
                    }),
                  ],
                })
              : Object(F.jsx)(K, {}),
          ],
        });
      };
      var qe = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice),
          [t, s] = Object(c.useState)(),
          [a, n] = Object(c.useState)(),
          [l, r] = Object(c.useState)(),
          [d, j] = Object(c.useState)(),
          b = Object(i.useHistory)();
        Object(c.useEffect)(() => {
          const t = { applicantID: e.id };
          (async () => {
            const e = await w(t),
              { data: s } = e;
            j(s);
          })();
        }, []);
        return Object(F.jsx)(F.Fragment, {
          children: d
            ? Object(F.jsxs)("div", {
                className: "main-content",
                children: [
                  Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className:
                            "card-header d-flex justify-content-between",
                          children: Object(F.jsx)("h4", {
                            children: "Leave Applications",
                          }),
                        }),
                      }),
                      Object(F.jsxs)("div", {
                        className:
                          "d-flex justify-content-center align-items-center w-100",
                        children: [
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-2",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Leave Type",
                              }),
                              Object(F.jsxs)("select", {
                                name: "type",
                                onChange: (e) => s(e.target.value),
                                className: "form-control select2",
                                children: [
                                  Object(F.jsx)("option", {
                                    children: "Select",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Sick Leave",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Casual Leave",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Emergency Leave",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-2",
                            children: [
                              Object(F.jsx)("label", { children: "Status" }),
                              Object(F.jsxs)("select", {
                                name: "type",
                                onChange: (e) => n(e.target.value),
                                className: "form-control select2",
                                children: [
                                  Object(F.jsx)("option", {
                                    children: "Select",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Pending",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Approved",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Rejected",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-4",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Applied Date",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        class: "fa fa-calendar",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: (e) => r(e.target.value),
                                    type: "date",
                                    id: "startDate",
                                    name: "startDate",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsx)("button", {
                            onClick: async () => {
                              const c = { applicantID: e.id };
                              t && (c.type = t),
                                a && (c.adminResponse = a),
                                l && (c.appliedDate = l);
                              const i = await w(c),
                                { data: d } = i;
                              j(d), r(""), s(""), n("");
                            },
                            className: "btn btn-lg btn-primary col",
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "table-responsive",
                    children: Object(F.jsxs)("table", {
                      className: "table table-striped table-md center-text",
                      children: [
                        Object(F.jsx)("thead", {
                          children: Object(F.jsxs)("tr", {
                            children: [
                              Object(F.jsx)("th", { children: "#" }),
                              Object(F.jsx)("th", { children: "Type" }),
                              Object(F.jsx)("th", { children: "Title" }),
                              Object(F.jsx)("th", { children: "Applied Date" }),
                              Object(F.jsx)("th", { children: "Status" }),
                            ],
                          }),
                        }),
                        Object(F.jsx)("tbody", {
                          className: "sidebar-wrapper",
                          children:
                            null === d || void 0 === d
                              ? void 0
                              : d.map((e, t) =>
                                  Object(F.jsxs)("tr", {
                                    className: "hover-effect",
                                    onClick: () =>
                                      b.push(`userLeaveApplications/${e._id}`),
                                    children: [
                                      Object(F.jsx)("td", { children: t + 1 }),
                                      Object(F.jsx)("td", { children: e.type }),
                                      Object(F.jsx)("td", {
                                        children: e.title,
                                      }),
                                      Object(F.jsx)("td", {
                                        children: e.appliedDate,
                                      }),
                                      Object(F.jsx)("td", {
                                        className:
                                          "" +
                                          ("Rejected" === e.adminResponse
                                            ? "text-danger"
                                            : "Pending" === e.adminResponse
                                            ? "text-primary"
                                            : "text-success"),
                                        children: e.adminResponse,
                                      }),
                                    ],
                                  })
                                ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : Object(F.jsx)(K, {}),
        });
      };
      var We = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice),
          [t, s] = Object(c.useState)();
        return (
          Object(c.useEffect)(() => {
            const t = { employeeID: e.id };
            console.log(e.id);
            (async () => {
              const c = await ((e) => b.post("employee/view-salary", e))(t),
                { success: a, data: n } = c;
              n.length > 0
                ? s(c.data[0])
                : j.b.error(e.name + "'s Salary not found");
            })();
          }, []),
          Object(F.jsx)(F.Fragment, {
            children: t
              ? Object(F.jsx)("div", {
                  className: "main-content",
                  children: Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className:
                            "card-header d-flex justify-content-between",
                          children: t
                            ? Object(F.jsxs)("h4", {
                                children: [
                                  "Updated Salary from ",
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.assignedDate,
                                ],
                              })
                            : Object(F.jsx)("h4", {
                                children: "Salary not yet updated",
                              }),
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "card " + (t ? "" : "d-none"),
                        children: Object(F.jsxs)("div", {
                          className: "card-body row",
                          children: [
                            Object(F.jsx)("div", {
                              className: "col-md-3 ",
                              children: Object(F.jsx)("img", {
                                className: "img-fluid img-thumbnail",
                                src: e.image,
                                alt: "",
                              }),
                            }),
                            Object(F.jsx)("div", {
                              className: "col-md-9",
                              children: Object(F.jsx)("table", {
                                className: "table",
                                children: Object(F.jsxs)("tbody", {
                                  children: [
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Name",
                                        }),
                                        Object(F.jsx)("td", {
                                          children: e.name,
                                        }),
                                      ],
                                    }),
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Email",
                                        }),
                                        Object(F.jsx)("td", {
                                          children: e.email,
                                        }),
                                      ],
                                    }),
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Mobile",
                                        }),
                                        Object(F.jsx)("td", {
                                          children: e.mobile,
                                        }),
                                      ],
                                    }),
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Address",
                                        }),
                                        Object(F.jsx)("td", {
                                          children: e.address,
                                        }),
                                      ],
                                    }),
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Salary",
                                        }),
                                        Object(F.jsxs)("td", {
                                          children: [
                                            " Rs. ",
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.salary,
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Bonus",
                                        }),
                                        Object(F.jsxs)("td", {
                                          children: [
                                            " Rs. ",
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.bonus,
                                          ],
                                        }),
                                      ],
                                    }),
                                    Object(F.jsxs)("tr", {
                                      children: [
                                        Object(F.jsx)("th", {
                                          children: "Reason for Bonus",
                                        }),
                                        Object(F.jsx)("td", {
                                          children:
                                            null === t || void 0 === t
                                              ? void 0
                                              : t.reasonForBonus,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              : Object(F.jsx)(K, {}),
          })
        );
      };
      s(36);
      var Je = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice),
          t = {
            title: "",
            type: "",
            period: "",
            startDate: "",
            endDate: "",
            reason: "",
          },
          [s, a] = Object(c.useState)(t),
          n = (e) => {
            console.log(s);
            const { name: t, value: c } = e.target;
            a((e) => ({ ...e, [t]: c }));
          };
        return Object(F.jsx)(F.Fragment, {
          children: Object(F.jsx)("div", {
            className: "main-content",
            children: Object(F.jsxs)("section", {
              className: "section",
              children: [
                Object(F.jsx)(U, { title: "Apply for Leave" }),
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsx)("div", {
                    className: "card-body pr-5 pl-5 m-1",
                    children: Object(F.jsxs)("form", {
                      className: "row",
                      onSubmit: async (c) => {
                        c.preventDefault();
                        const {
                          title: n,
                          type: l,
                          startDate: i,
                          endDate: r,
                          reason: d,
                          period: o,
                        } = s;
                        if (!n || !l || !i || !r || !o || !d)
                          return j.b.error("All Field Required");
                        const m = new Date();
                        (s.applicantID = e.id),
                          (s.appliedDate =
                            m.getFullYear() +
                            "-" +
                            (m.getMonth() + 1) +
                            "-" +
                            m.getDate()),
                          console.log(s);
                        const h = await ((x = s),
                        b.post("/employee/apply-leave-application", x));
                        var x;
                        const { success: O } = h;
                        console.log(h),
                          O && j.b.success("Leave Application Sent!"),
                          a(t);
                      },
                      id: "addUserForm",
                      children: [
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-4",
                          children: [
                            Object(F.jsx)("label", { children: "Enter Title" }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-pen",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: n,
                                  value: s.title,
                                  type: "text",
                                  id: "title",
                                  name: "title",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-4",
                          children: [
                            Object(F.jsx)("label", { children: "Leave Type" }),
                            Object(F.jsxs)("select", {
                              name: "type",
                              onChange: n,
                              value: s.type,
                              className: "form-control select2",
                              children: [
                                Object(F.jsx)("option", { children: "Select" }),
                                Object(F.jsx)("option", {
                                  children: "Sick Leave",
                                }),
                                Object(F.jsx)("option", {
                                  children: "Casual Leave",
                                }),
                                Object(F.jsx)("option", {
                                  children: "Emergency Leave",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-4",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Period",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-pen",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: n,
                                  value: s.period,
                                  type: "number",
                                  id: "period",
                                  name: "period",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-6",
                          children: [
                            Object(F.jsx)("label", { children: "Start Date" }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      class: "fa fa-calendar",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: n,
                                  value: s.startDate,
                                  type: "date",
                                  id: "startDate",
                                  name: "startDate",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-6",
                          children: [
                            Object(F.jsx)("label", { children: "End Date" }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      class: "fa fa-calendar",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: n,
                                  value: s.endDate,
                                  type: "date",
                                  id: "endDate",
                                  name: "endDate",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-12 ",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Reason",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-book",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: n,
                                  value: s.reason,
                                  type: "text",
                                  id: "reason",
                                  name: "reason",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsx)("div", {
                          className: "form-group text-center col-md-12",
                          children: Object(F.jsx)("button", {
                            className: "btn btn-primary btn-lg",
                            type: "submit",
                            style: { width: "30vh" },
                            children: "Apply Leave",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var Ge = () => {
        const e = Object(S.b)(),
          { team: t } = Object(S.c)((e) => e.teamSlice),
          { teamMembers: s } = Object(S.c)((e) => e.userSlice),
          [a, n] = Object(c.useState)(!0),
          [l, r] = Object(c.useState)(!1),
          [d, j] = Object(c.useState)(!1),
          [o, m] = Object(c.useState)(!0),
          [h, p] = Object(c.useState)(!1),
          [u, v] = Object(c.useState)(!1),
          [N, g] = Object(c.useState)(!1),
          { id: f } = Object(i.useParams)();
        Object(c.useEffect)(() => {
          (async () => {
            const t = await y(f);
            t.success && (e(ce(t.data)), e(ae(t.data.information)), n(!1));
            const s = await ((c = f), b.get(`/employee/team/${c}/members`));
            var c;
            s.success && (e(je(s.data)), m(!1));
          })();
        }, [f]);
        const w = async () => {
            if ((g(!N), !d)) {
              const t = await x();
              t.success && e(be(t.data)), j(!0);
            }
          },
          A = () => {
            v(!u);
          };
        return Object(F.jsxs)(F.Fragment, {
          children: [
            h &&
              Object(F.jsx)(De, {
                close: async () => {
                  if ((p(!h), !l)) {
                    const t = await O();
                    t.success && e(de(t.data)), r(!0);
                  }
                },
              }),
            u && Object(F.jsx)(ye, { close: A }),
            N && Object(F.jsx)(Se, { close: w }),
            Object(F.jsx)("div", {
              className: "main-content",
              children: Object(F.jsxs)("section", {
                className: "section",
                children: [
                  t &&
                    Object(F.jsxs)(F.Fragment, {
                      children: [
                        Object(F.jsx)("div", {
                          className:
                            "section-header  d-flex justify-content-between",
                          children: Object(F.jsx)("h1", { children: "Team" }),
                        }),
                        Object(F.jsxs)("div", {
                          className: "row",
                          children: [
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                            Object(F.jsx)(Y, {
                              title: "Total Employee",
                              icon: "fa-user",
                              count: t.information.employee,
                            }),
                          ],
                        }),
                        Object(F.jsx)("div", {
                          className: "card",
                          children: Object(F.jsxs)("div", {
                            className: "card-body row",
                            children: [
                              Object(F.jsx)("div", {
                                className: "col-md-3 ",
                                children: Object(F.jsx)("img", {
                                  className: "img-fluid img-thumbnail",
                                  src: t.image,
                                  alt: "",
                                }),
                              }),
                              Object(F.jsx)("div", {
                                className: "col-md-9",
                                children: Object(F.jsx)("table", {
                                  className: "table",
                                  children: Object(F.jsxs)("tbody", {
                                    children: [
                                      Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "Name",
                                          }),
                                          Object(F.jsx)("td", {
                                            children: t.name,
                                          }),
                                        ],
                                      }),
                                      Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "Description",
                                          }),
                                          Object(F.jsx)("td", {
                                            children: t.description,
                                          }),
                                        ],
                                      }),
                                      Object(F.jsxs)("tr", {
                                        children: [
                                          Object(F.jsx)("th", {
                                            children: "Leader",
                                          }),
                                          Object(F.jsx)("td", {
                                            children: t.leader
                                              ? Object(F.jsxs)("button", {
                                                  className:
                                                    "badge btn badge-primary",
                                                  onClick: A,
                                                  style: {
                                                    padding: "0px 10px 0px 0px",
                                                  },
                                                  children: [
                                                    Object(F.jsx)("img", {
                                                      src: t.leader.image,
                                                      className:
                                                        "avatar avatar-sm mr-2",
                                                      alt: "Person",
                                                      width: "96",
                                                      height: "96",
                                                    }),
                                                    t.leader.name,
                                                  ],
                                                })
                                              : Object(F.jsxs)("button", {
                                                  onClick: w,
                                                  className:
                                                    "badge badge-light btn",
                                                  style: {
                                                    padding: "0px 10px 0px 0px",
                                                  },
                                                  children: [
                                                    Object(F.jsx)("img", {
                                                      src: "../assets/icons/user.png",
                                                      className:
                                                        "avatar avatar-sm mr-2",
                                                      alt: "Person",
                                                    }),
                                                    "No Leader",
                                                  ],
                                                }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  !o &&
                    Object(F.jsxs)("div", {
                      className: "card",
                      children: [
                        Object(F.jsx)("div", {
                          className: "card-header",
                          children: Object(F.jsx)("h4", {
                            children: "All Employees",
                          }),
                        }),
                        Object(F.jsx)("div", {
                          className: "card-body p-0",
                          children: Object(F.jsx)("div", {
                            className: "table-responsive",
                            children: Object(F.jsxs)("table", {
                              className:
                                "table table-striped table-md center-text",
                              children: [
                                Object(F.jsx)("thead", {
                                  children: Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("th", { children: "#" }),
                                      Object(F.jsx)("th", {
                                        children: "Image",
                                      }),
                                      Object(F.jsx)("th", { children: "Name" }),
                                      Object(F.jsx)("th", {
                                        children: "Email",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Mobile",
                                      }),
                                      Object(F.jsx)("th", {
                                        children: "Status",
                                      }),
                                    ],
                                  }),
                                }),
                                Object(F.jsx)("tbody", {
                                  children:
                                    !a &&
                                    s &&
                                    s.map((e, t) =>
                                      Object(F.jsx)(
                                        fe,
                                        { index: t + 1, data: e },
                                        t
                                      )
                                    ),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          ],
        });
      };
      var ze = () => {
        const { id: e } = Object(i.useParams)(),
          [t, s] = Object(c.useState)();
        return (
          Object(c.useEffect)(() => {
            (async () => {
              const t = { _id: e },
                c = await w(t);
              s(c.data[0]);
            })();
          }, []),
          t
            ? Object(F.jsx)("div", {
                className: "main-content",
                children: Object(F.jsxs)("section", {
                  className: "section",
                  children: [
                    Object(F.jsx)("div", {
                      className: "card",
                      children: Object(F.jsx)("div", {
                        className: "card-header d-flex justify-content-between",
                        children: Object(F.jsxs)("h4", {
                          children: [
                            "Application on ",
                            null === t || void 0 === t ? void 0 : t.appliedDate,
                          ],
                        }),
                      }),
                    }),
                    Object(F.jsx)("div", {
                      className: "col-md-9",
                      children: Object(F.jsx)("table", {
                        className: "table",
                        children: Object(F.jsxs)("tbody", {
                          children: [
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Title" }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.title,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Type" }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.type,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Reason" }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.reason,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Start Date" }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.startDate,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "End Date" }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.endDate,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", {
                                  children: "Applied Date",
                                }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.appliedDate,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Period" }),
                                Object(F.jsx)("td", {
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.period,
                                }),
                              ],
                            }),
                            Object(F.jsxs)("tr", {
                              children: [
                                Object(F.jsx)("th", { children: "Status" }),
                                Object(F.jsx)("td", {
                                  className:
                                    "" +
                                    ("Rejected" ===
                                    (null === t || void 0 === t
                                      ? void 0
                                      : t.adminResponse)
                                      ? "text-danger"
                                      : "Pending" ===
                                        (null === t || void 0 === t
                                          ? void 0
                                          : t.adminResponse)
                                      ? "text-primary"
                                      : "text-success"),
                                  children:
                                    null === t || void 0 === t
                                      ? void 0
                                      : t.adminResponse,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              })
            : Object(F.jsx)(K, {})
        );
      };
      var Ke = () => {
        var e, t, s, c, a, n, l, i, r;
        const { user: d } = Object(S.c)((e) => e.authSlice);
        return (
          console.log(d),
          Object(F.jsx)("div", {
            className: "main-content",
            children: Object(F.jsxs)("section", {
              className: "section",
              children: [
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsx)("div", {
                    className: "card-header d-flex justify-content-between",
                    children: Object(F.jsxs)("h4", {
                      children: [
                        "Welcome ",
                        null === d || void 0 === d ? void 0 : d.name,
                      ],
                    }),
                  }),
                }),
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsxs)("div", {
                    className: "card-body row",
                    children: [
                      Object(F.jsx)("div", {
                        className: "col-md-3 ",
                        children: Object(F.jsx)("img", {
                          className: "img-fluid img-thumbnail",
                          src: d.image,
                          alt: "",
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "col-md-9",
                        children: Object(F.jsx)("table", {
                          className: "table",
                          children: Object(F.jsxs)("tbody", {
                            children: [
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Name" }),
                                  Object(F.jsx)("td", { children: d.name }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Username" }),
                                  Object(F.jsx)("td", { children: d.username }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Email" }),
                                  Object(F.jsx)("td", { children: d.email }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Usertype" }),
                                  Object(F.jsx)("td", { children: d.type }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Status" }),
                                  Object(F.jsx)("td", { children: d.status }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Mobile" }),
                                  Object(F.jsx)("td", { children: d.mobile }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Address" }),
                                  Object(F.jsx)("td", { children: d.address }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(F.jsx)("div", {
                  className: "col-md-9",
                  children: Object(F.jsx)("table", {
                    className: "table",
                    children: Object(F.jsxs)("tbody", {
                      children: [
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "Title" }),
                            Object(F.jsx)("td", {
                              children:
                                null === (e = application) || void 0 === e
                                  ? void 0
                                  : e.title,
                            }),
                          ],
                        }),
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "Type" }),
                            Object(F.jsx)("td", {
                              children:
                                null === (t = application) || void 0 === t
                                  ? void 0
                                  : t.type,
                            }),
                          ],
                        }),
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "Start Date" }),
                            Object(F.jsx)("td", {
                              children:
                                null === (s = application) || void 0 === s
                                  ? void 0
                                  : s.startDate,
                            }),
                          ],
                        }),
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "End Date" }),
                            Object(F.jsx)("td", {
                              children:
                                null === (c = application) || void 0 === c
                                  ? void 0
                                  : c.endDate,
                            }),
                          ],
                        }),
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "Applied Date" }),
                            Object(F.jsx)("td", {
                              children:
                                null === (a = application) || void 0 === a
                                  ? void 0
                                  : a.appliedDate,
                            }),
                          ],
                        }),
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "Period" }),
                            Object(F.jsx)("td", {
                              children:
                                null === (n = application) || void 0 === n
                                  ? void 0
                                  : n.period,
                            }),
                          ],
                        }),
                        Object(F.jsxs)("tr", {
                          children: [
                            Object(F.jsx)("th", { children: "Status" }),
                            Object(F.jsx)("td", {
                              className:
                                "" +
                                ("Rejected" ===
                                (null === (l = application) || void 0 === l
                                  ? void 0
                                  : l.adminResponse)
                                  ? "text-danger"
                                  : "Pending" ===
                                    (null === (i = application) || void 0 === i
                                      ? void 0
                                      : i.adminResponse)
                                  ? "text-primary"
                                  : "text-success"),
                              children:
                                null === (r = application) || void 0 === r
                                  ? void 0
                                  : r.adminResponse,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      };
      var Ve = () => {
        const [e, t] = Object(c.useState)(""),
          [s, a] = Object(c.useState)(""),
          [n, l] = Object(c.useState)(""),
          [i, r] = Object(c.useState)(),
          [d, j] = Object(c.useState)(),
          [b, o] = Object(c.useState)(),
          [x, O] = Object(c.useState)(),
          p = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          u = {
            January: 31,
            February: 28,
            March: 31,
            April: 30,
            May: 31,
            June: 30,
            July: 31,
            August: 31,
            September: 30,
            October: 31,
            November: 30,
            December: 31,
          }[s],
          N = Array.from({ length: u }, (e, t) => t + 1);
        Object(c.useEffect)(() => {
          const e = new Date(),
            t = {
              year: e.getFullYear(),
              month: e.getMonth() + 1,
              date: e.getDate(),
            };
          let s = {};
          (async () => {
            const e = await m(),
              t = await h();
            e.data.forEach((e) => (s[e.id] = [e.name, e.email])),
              t.data.forEach((e) => (s[e.id] = [e.name, e.email])),
              j(s),
              o([...e.data, ...t.data]);
          })(),
            (async () => {
              const e = await v(t),
                { data: s } = e;
              console.log(s), r(s);
            })();
        }, []);
        return Object(F.jsx)(F.Fragment, {
          children: i
            ? Object(F.jsxs)("div", {
                className: "main-content",
                children: [
                  Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className:
                            "card-header d-flex justify-content-between",
                          children: Object(F.jsx)("h4", {
                            children: "Attendance",
                          }),
                        }),
                      }),
                      Object(F.jsxs)("div", {
                        className: "d-flex justify-content-center w-100",
                        children: [
                          Object(F.jsx)("div", {
                            className: "col",
                            children: Object(F.jsxs)("select", {
                              className: "form-control select2",
                              value: x,
                              onChange: (e) => O(e.target.value),
                              children: [
                                Object(F.jsx)("option", {
                                  value: "",
                                  children: "Employees",
                                }),
                                null === b || void 0 === b
                                  ? void 0
                                  : b.map((e) =>
                                      Object(F.jsx)(
                                        "option",
                                        { value: e.id, children: e.name },
                                        e._id
                                      )
                                    ),
                              ],
                            }),
                          }),
                          Object(F.jsx)("div", {
                            className: "col",
                            children: Object(F.jsxs)("select", {
                              className: "form-control select2",
                              value: e,
                              onChange: (e) => t(e.target.value),
                              children: [
                                Object(F.jsx)("option", {
                                  value: "",
                                  children: "Year",
                                }),
                                [2020, 2021, 2022, 2023, 2024].map((e) =>
                                  Object(F.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              ],
                            }),
                          }),
                          Object(F.jsx)("div", {
                            className: "col",
                            children: Object(F.jsxs)("select", {
                              className: "form-control select2",
                              value: s,
                              onChange: (e) => a(e.target.value),
                              children: [
                                Object(F.jsx)("option", {
                                  value: "",
                                  children: "Month",
                                }),
                                p.map((e) =>
                                  Object(F.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              ],
                            }),
                          }),
                          Object(F.jsx)("div", {
                            className: "col",
                            children: Object(F.jsxs)("select", {
                              className: "form-control select2",
                              value: n,
                              onChange: (e) => l(e.target.value),
                              children: [
                                Object(F.jsx)("option", {
                                  value: "",
                                  children: "Day",
                                }),
                                N.map((e) =>
                                  Object(F.jsx)(
                                    "option",
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              ],
                            }),
                          }),
                          Object(F.jsx)("button", {
                            onClick: async () => {
                              const t = {};
                              x && (t.employeeID = x),
                                e && (t.year = e),
                                s &&
                                  (t.month = p.findIndex((e) => e === s) + 1),
                                n && (t.date = n),
                                console.log(t);
                              const c = await v(t),
                                { data: a } = c;
                              r(a);
                            },
                            className: "btn btn-lg btn-primary col",
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "table-responsive",
                    children: Object(F.jsxs)("table", {
                      className: "table table-striped table-md center-text",
                      children: [
                        Object(F.jsx)("thead", {
                          children: Object(F.jsxs)("tr", {
                            children: [
                              Object(F.jsx)("th", { children: "#" }),
                              Object(F.jsx)("th", { children: "Name" }),
                              Object(F.jsx)("th", { children: "Email" }),
                              Object(F.jsx)("th", { children: "Date" }),
                              Object(F.jsx)("th", { children: "Day" }),
                              Object(F.jsx)("th", { children: "Status" }),
                            ],
                          }),
                        }),
                        Object(F.jsx)("tbody", {
                          children:
                            null === i || void 0 === i
                              ? void 0
                              : i.map((e, t) =>
                                  Object(F.jsxs)("tr", {
                                    children: [
                                      Object(F.jsx)("td", { children: t + 1 }),
                                      Object(F.jsx)("td", {
                                        children: d && d[e.employeeID][0],
                                      }),
                                      Object(F.jsx)("td", {
                                        children: d && d[e.employeeID][1],
                                      }),
                                      Object(F.jsx)("td", {
                                        children:
                                          e.date + "/" + e.month + "/" + e.year,
                                      }),
                                      Object(F.jsx)("td", { children: e.day }),
                                      Object(F.jsx)("td", {
                                        children:
                                          !0 === e.present ? "Present" : "",
                                      }),
                                    ],
                                  })
                                ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : Object(F.jsx)(K, {}),
        });
      };
      var Qe = () => {
        const [e, t] = Object(c.useState)(),
          [s, a] = Object(c.useState)(),
          [n, l] = Object(c.useState)(),
          [r, d] = Object(c.useState)(),
          j = Object(i.useHistory)(),
          [b, o] = Object(c.useState)(),
          [x, O] = Object(c.useState)(),
          [p, u] = Object(c.useState)();
        Object(c.useEffect)(() => {
          let e = {};
          (async () => {
            const e = await N({}),
              { data: t } = e;
            d(t);
          })(),
            (async () => {
              const t = await m(),
                s = await h();
              t.data.forEach((t) => (e[t.id] = [t.name, t.email])),
                s.data.forEach((t) => (e[t.id] = [t.name, t.email])),
                O(e),
                o([...t.data, ...s.data]);
            })();
        }, []);
        return Object(F.jsx)(F.Fragment, {
          children: r
            ? Object(F.jsxs)("div", {
                className: "main-content",
                children: [
                  Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className:
                            "card-header d-flex justify-content-between",
                          children: Object(F.jsx)("h4", {
                            children: "Leave Applications",
                          }),
                        }),
                      }),
                      Object(F.jsxs)("div", {
                        className:
                          "d-flex justify-content-center align-items-center w-100",
                        children: [
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-2",
                            children: [
                              Object(F.jsx)("label", { children: "Employee" }),
                              Object(F.jsxs)("select", {
                                className: "form-control select2",
                                value: p,
                                onChange: (e) => u(e.target.value),
                                children: [
                                  Object(F.jsx)("option", {
                                    value: "",
                                    children: "Employees",
                                  }),
                                  null === b || void 0 === b
                                    ? void 0
                                    : b.map((e) =>
                                        Object(F.jsx)(
                                          "option",
                                          { value: e.id, children: e.name },
                                          e._id
                                        )
                                      ),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-2",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Leave Type",
                              }),
                              Object(F.jsxs)("select", {
                                name: "type",
                                onChange: (e) => t(e.target.value),
                                className: "form-control select2",
                                children: [
                                  Object(F.jsx)("option", {
                                    children: "Select",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Sick Leave",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Casual Leave",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Emergency Leave",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-2",
                            children: [
                              Object(F.jsx)("label", { children: "Status" }),
                              Object(F.jsxs)("select", {
                                name: "type",
                                onChange: (e) => a(e.target.value),
                                className: "form-control select2",
                                children: [
                                  Object(F.jsx)("option", {
                                    children: "Select",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Pending",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Approved",
                                  }),
                                  Object(F.jsx)("option", {
                                    children: "Rejected",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-4",
                            children: [
                              Object(F.jsx)("label", {
                                children: "Applied Date",
                              }),
                              Object(F.jsxs)("div", {
                                className: "input-group",
                                children: [
                                  Object(F.jsx)("div", {
                                    className: "input-group-prepend",
                                    children: Object(F.jsx)("div", {
                                      className: "input-group-text",
                                      children: Object(F.jsx)("i", {
                                        class: "fa fa-calendar",
                                      }),
                                    }),
                                  }),
                                  Object(F.jsx)("input", {
                                    onChange: (e) => l(e.target.value),
                                    type: "date",
                                    id: "startDate",
                                    name: "startDate",
                                    className: "form-control",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsx)("button", {
                            onClick: async () => {
                              const c = {};
                              p && (c.applicantID = p),
                                e && (c.type = e),
                                s && (c.adminResponse = s),
                                n && (c.appliedDate = n),
                                console.log(c);
                              const i = await N(c),
                                { data: r } = i;
                              d(r), l(""), t(""), a("");
                            },
                            className: "btn btn-lg btn-primary col",
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "table-responsive",
                    children: Object(F.jsxs)("table", {
                      className: "table table-striped table-md center-text",
                      children: [
                        Object(F.jsx)("thead", {
                          children: Object(F.jsxs)("tr", {
                            children: [
                              Object(F.jsx)("th", { children: "#" }),
                              Object(F.jsx)("th", { children: "Name" }),
                              Object(F.jsx)("th", { children: "Email" }),
                              Object(F.jsx)("th", { children: "Type" }),
                              Object(F.jsx)("th", { children: "Title" }),
                              Object(F.jsx)("th", { children: "Applied Date" }),
                              Object(F.jsx)("th", { children: "Status" }),
                            ],
                          }),
                        }),
                        Object(F.jsx)("tbody", {
                          className: "sidebar-wrapper",
                          children:
                            null === r || void 0 === r
                              ? void 0
                              : r.map((e, t) =>
                                  Object(F.jsxs)("tr", {
                                    className: "hover-effect",
                                    onClick: () => j.push(`leaves/${e._id}`),
                                    children: [
                                      Object(F.jsx)("td", { children: t + 1 }),
                                      Object(F.jsx)("td", {
                                        children: x && x[e.applicantID][0],
                                      }),
                                      Object(F.jsx)("td", {
                                        children: x && x[e.applicantID][1],
                                      }),
                                      Object(F.jsx)("td", { children: e.type }),
                                      Object(F.jsx)("td", {
                                        children: e.title,
                                      }),
                                      Object(F.jsx)("td", {
                                        children: e.appliedDate,
                                      }),
                                      Object(F.jsx)("td", {
                                        className:
                                          "" +
                                          ("Rejected" === e.adminResponse
                                            ? "text-danger"
                                            : "Pending" === e.adminResponse
                                            ? "text-primary"
                                            : "text-success"),
                                        children: e.adminResponse,
                                      }),
                                    ],
                                  })
                                ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : Object(F.jsx)(K, {}),
        });
      };
      var Xe = () => {
        const { id: e } = Object(i.useParams)(),
          [t, s] = Object(c.useState)();
        Object(c.useEffect)(() => {
          (async () => {
            const t = { _id: e },
              c = await N(t);
            s(c.data[0]);
          })();
        }, [t]);
        return Object(F.jsx)(F.Fragment, {
          children: t
            ? Object(F.jsx)("div", {
                className: "main-content",
                children: Object(F.jsxs)("section", {
                  className: "section",
                  children: [
                    Object(F.jsx)("div", {
                      className: "card",
                      children: Object(F.jsx)("div", {
                        className: "card-header d-flex justify-content-between",
                        children: Object(F.jsxs)("h4", {
                          children: [
                            "Application on ",
                            null === t || void 0 === t ? void 0 : t.appliedDate,
                          ],
                        }),
                      }),
                    }),
                    Object(F.jsxs)("div", {
                      className: "col-md-9",
                      children: [
                        Object(F.jsx)("table", {
                          className: "table",
                          children: Object(F.jsxs)("tbody", {
                            children: [
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Title" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.title,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Type" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.type,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Reason" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.reason,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", {
                                    children: "Start Date",
                                  }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.startDate,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "End Date" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.endDate,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", {
                                    children: "Applied Date",
                                  }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.appliedDate,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Period" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.period,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Status" }),
                                  Object(F.jsx)("td", {
                                    className:
                                      "" +
                                      ("Rejected" ===
                                      (null === t || void 0 === t
                                        ? void 0
                                        : t.adminResponse)
                                        ? "text-danger"
                                        : "Pending" ===
                                          (null === t || void 0 === t
                                            ? void 0
                                            : t.adminResponse)
                                        ? "text-primary"
                                        : "text-success"),
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.adminResponse,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        Object(F.jsx)("button", {
                          onClick: async () => {
                            if (
                              (console.log(t), "Approved" === t.adminResponse)
                            )
                              return void j.b.error(
                                "Application already approved"
                              );
                            t.adminResponse = "Approved";
                            const c = await g(e, t),
                              { success: a } = c;
                            a && (j.b.success("Leave Approved"), s(t));
                          },
                          className:
                            ("Approved" ===
                            (null === t || void 0 === t
                              ? void 0
                              : t.adminResponse)
                              ? "btn-secondary"
                              : "btn-success") +
                            " btn btn-lg m-4 btn-icon-split",
                          children: "Approve",
                        }),
                        Object(F.jsx)("button", {
                          onClick: async () => {
                            if (
                              (console.log(t), "Rejected" === t.adminResponse)
                            )
                              return void j.b.error(
                                "Application already rejected"
                              );
                            t.adminResponse = "Rejected";
                            const c = await g(e, t),
                              { success: a } = c;
                            a && (j.b.success("Leave Rejected"), s(t));
                          },
                          className:
                            ("Rejected" ===
                            (null === t || void 0 === t
                              ? void 0
                              : t.adminResponse)
                              ? "btn-secondary"
                              : "btn-danger") +
                            " btn btn-lg m-4 btn-icon-split",
                          children: "Reject",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : Object(F.jsx)(K, {}),
        });
      };
      var Ze = () => {
        const e = { salary: "", bonus: "", reasonForBonus: "" },
          [t, s] = Object(c.useState)(e),
          [a, n] = Object(c.useState)(),
          [l, i] = Object(c.useState)();
        Object(c.useEffect)(() => {
          (async () => {
            const e = await m(),
              t = await h();
            i([...e.data, ...t.data]);
          })();
        }, []);
        const r = (e) => {
          console.log(t);
          const { name: c, value: a } = e.target;
          s((e) => ({ ...e, [c]: a }));
        };
        return Object(F.jsx)(F.Fragment, {
          children: Object(F.jsx)("div", {
            className: "main-content",
            children: Object(F.jsxs)("section", {
              className: "section",
              children: [
                Object(F.jsx)(U, { title: "Salary" }),
                Object(F.jsx)("div", {
                  className: "card",
                  children: Object(F.jsx)("div", {
                    className: "card-body pr-5 pl-5 m-1",
                    children: Object(F.jsxs)("form", {
                      className: "row",
                      onSubmit: async (c) => {
                        c.preventDefault();
                        const { salary: n, bonus: l, reasonForBonus: i } = t;
                        if (!n || !l || !i)
                          return j.b.error("All Field Required");
                        t.employeeID = a;
                        const r = await ((d = t),
                        b.post("admin/assign-employee-salary", d));
                        var d;
                        const { success: o } = r;
                        console.log(r),
                          o && j.b.success("Salary Assigned!"),
                          s(e);
                      },
                      id: "addUserForm",
                      children: [
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-4",
                          children: [
                            Object(F.jsx)("label", { children: "Employees" }),
                            Object(F.jsxs)("select", {
                              className: "form-control select2",
                              value: a,
                              onChange: (e) => n(e.target.value),
                              children: [
                                Object(F.jsx)("option", {
                                  value: "",
                                  children: "Employees",
                                }),
                                null === l || void 0 === l
                                  ? void 0
                                  : l.map((e) =>
                                      Object(F.jsx)(
                                        "option",
                                        { value: e.id, children: e.name },
                                        e._id
                                      )
                                    ),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-4",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Salary",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-pen",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: r,
                                  value: t.salary,
                                  type: "number",
                                  id: "salary",
                                  name: "salary",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-4",
                          children: [
                            Object(F.jsx)("label", { children: "Enter Bonus" }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-pen",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: r,
                                  value: t.bonus,
                                  type: "number",
                                  id: "bonus",
                                  name: "bonus",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsxs)("div", {
                          className: "form-group col-md-12 ",
                          children: [
                            Object(F.jsx)("label", {
                              children: "Enter Reason",
                            }),
                            Object(F.jsxs)("div", {
                              className: "input-group",
                              children: [
                                Object(F.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: Object(F.jsx)("div", {
                                    className: "input-group-text",
                                    children: Object(F.jsx)("i", {
                                      className: "fas fa-book",
                                    }),
                                  }),
                                }),
                                Object(F.jsx)("input", {
                                  onChange: r,
                                  value: t.reasonForBonus,
                                  type: "text",
                                  id: "reasonForBonus",
                                  name: "reasonForBonus",
                                  className: "form-control",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(F.jsx)("div", {
                          className: "form-group text-center col-md-12",
                          children: Object(F.jsx)("button", {
                            className: "btn btn-primary btn-lg",
                            type: "submit",
                            style: { width: "30vh" },
                            children: "Assign Salary",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      };
      var et = () => {
        const e = Object(i.useHistory)(),
          [t, s] = Object(c.useState)(),
          [a, n] = Object(c.useState)(),
          [l, r] = Object(c.useState)(),
          [d, j] = Object(c.useState)();
        Object(c.useEffect)(() => {
          let e = {};
          (async () => {
            const e = await f({}),
              { data: t } = e;
            j(t);
          })(),
            (async () => {
              const t = await m(),
                c = await h();
              t.data.forEach((t) => (e[t.id] = [t.name, t.email])),
                c.data.forEach((t) => (e[t.id] = [t.name, t.email])),
                n(e),
                s([...t.data, ...c.data]);
            })();
        }, []);
        return Object(F.jsx)(F.Fragment, {
          children: d
            ? Object(F.jsxs)("div", {
                className: "main-content",
                children: [
                  Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className:
                            "card-header d-flex justify-content-between",
                          children: Object(F.jsx)("h4", {
                            children: "Salaries",
                          }),
                        }),
                      }),
                      Object(F.jsxs)("div", {
                        className:
                          "d-flex justify-content-center align-items-center w-100",
                        children: [
                          Object(F.jsxs)("div", {
                            className: "form-group col-md-6",
                            children: [
                              Object(F.jsx)("label", { children: "Employee" }),
                              Object(F.jsxs)("select", {
                                className: "form-control select2",
                                value: l,
                                onChange: (e) => r(e.target.value),
                                children: [
                                  Object(F.jsx)("option", {
                                    value: "",
                                    children: "Employees",
                                  }),
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.map((e) =>
                                        Object(F.jsx)(
                                          "option",
                                          { value: e.id, children: e.name },
                                          e._id
                                        )
                                      ),
                                ],
                              }),
                            ],
                          }),
                          Object(F.jsx)("button", {
                            onClick: async () => {
                              const e = {};
                              l && (e.employeeID = l);
                              const t = await f(e),
                                { data: s } = t;
                              j(s);
                            },
                            className: "btn btn-lg btn-primary col",
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(F.jsx)("div", {
                    className: "table-responsive",
                    children: Object(F.jsxs)("table", {
                      className: "table table-striped table-md center-text",
                      children: [
                        Object(F.jsx)("thead", {
                          children: Object(F.jsxs)("tr", {
                            children: [
                              Object(F.jsx)("th", { children: "#" }),
                              Object(F.jsx)("th", { children: "Name" }),
                              Object(F.jsx)("th", { children: "Email" }),
                              Object(F.jsx)("th", { children: "Salary" }),
                              Object(F.jsx)("th", { children: "Bonus" }),
                            ],
                          }),
                        }),
                        Object(F.jsx)("tbody", {
                          className: "sidebar-wrapper",
                          children:
                            null === d || void 0 === d
                              ? void 0
                              : d.map((t, s) =>
                                  Object(F.jsxs)("tr", {
                                    className: "hover-effect",
                                    onClick: () => e.push(`salary/${t._id}`),
                                    children: [
                                      Object(F.jsx)("td", { children: s + 1 }),
                                      Object(F.jsx)("td", {
                                        children: a && a[t.employeeID][0],
                                      }),
                                      Object(F.jsx)("td", {
                                        children: a && a[t.employeeID][1],
                                      }),
                                      Object(F.jsx)("td", {
                                        children: t.salary,
                                      }),
                                      Object(F.jsx)("td", {
                                        children: t.bonus,
                                      }),
                                    ],
                                  })
                                ),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : Object(F.jsx)(K, {}),
        });
      };
      var tt = () => {
        const { id: e } = Object(i.useParams)(),
          [t, s] = Object(c.useState)(),
          [a, n] = Object(c.useState)(),
          l = { salary: "", bonus: "", reasonForBonus: "" },
          [r, d] = Object(c.useState)(l);
        Object(c.useEffect)(() => {
          (async () => {
            const t = { _id: e },
              c = await f(t),
              a = await ((l = c.data[0].employeeID),
              b.get(`/admin/employee/${l}`));
            var l;
            const i = await ((e) => b.get(`/admin/leader/${e}`))(
              c.data[0].employeeID
            );
            a.success && n(a.data), i.success && n(i.data), s(c.data[0]);
          })();
        }, []);
        const o = (e) => {
          console.log(r);
          const { name: t, value: s } = e.target;
          d((e) => ({ ...e, [t]: s }));
        };
        return Object(F.jsx)(F.Fragment, {
          children: a
            ? Object(F.jsxs)("div", {
                className: "main-content",
                children: [
                  Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className:
                            "card-header d-flex justify-content-between",
                          children: Object(F.jsxs)("h4", {
                            children: [
                              "Updated Salary from ",
                              null === t || void 0 === t
                                ? void 0
                                : t.assignedDate,
                            ],
                          }),
                        }),
                      }),
                      Object(F.jsx)("div", {
                        className: "col-md-9",
                        children: Object(F.jsx)("table", {
                          className: "table",
                          children: Object(F.jsxs)("tbody", {
                            children: [
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Name" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === a || void 0 === a
                                        ? void 0
                                        : a.name,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Email" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === a || void 0 === a
                                        ? void 0
                                        : a.email,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Username" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === a || void 0 === a
                                        ? void 0
                                        : a.username,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", {
                                    children: "Mobile Number",
                                  }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === a || void 0 === a
                                        ? void 0
                                        : a.mobile,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Salary" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.salary,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Bonus" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.bonus,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", { children: "Reason" }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.reasonForBonus,
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("tr", {
                                children: [
                                  Object(F.jsx)("th", {
                                    children: "Last Updated",
                                  }),
                                  Object(F.jsx)("td", {
                                    children:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.assignedDate,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                  Object(F.jsxs)("section", {
                    className: "section",
                    children: [
                      Object(F.jsx)(U, { title: "Update Salary" }),
                      Object(F.jsx)("div", {
                        className: "card",
                        children: Object(F.jsx)("div", {
                          className: "card-body pr-5 pl-5 m-1",
                          children: Object(F.jsxs)("form", {
                            className: "row",
                            onSubmit: async (e) => {
                              e.preventDefault();
                              const {
                                salary: t,
                                bonus: s,
                                reasonForBonus: c,
                              } = r;
                              if (!t || !s || !c)
                                return j.b.error("All Field Required");
                              new Date();
                              (r.employeeID = a.id), console.log(r);
                              const n = await ((i = r),
                              b.post("admin/update-employee-salary", i));
                              var i;
                              const { success: o } = n;
                              console.log(n),
                                o && j.b.success("Salary Updated!"),
                                d(l);
                            },
                            id: "addUserForm",
                            children: [
                              Object(F.jsxs)("div", {
                                className: "form-group col-md-6",
                                children: [
                                  Object(F.jsx)("label", {
                                    children: "Enter Salary",
                                  }),
                                  Object(F.jsxs)("div", {
                                    className: "input-group",
                                    children: [
                                      Object(F.jsx)("div", {
                                        className: "input-group-prepend",
                                        children: Object(F.jsx)("div", {
                                          className: "input-group-text",
                                          children: Object(F.jsx)("i", {
                                            className: "fas fa-pen",
                                          }),
                                        }),
                                      }),
                                      Object(F.jsx)("input", {
                                        onChange: o,
                                        value: r.salary,
                                        type: "number",
                                        id: "salary",
                                        name: "salary",
                                        className: "form-control",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("div", {
                                className: "form-group col-md-6",
                                children: [
                                  Object(F.jsx)("label", {
                                    children: "Enter Bonus",
                                  }),
                                  Object(F.jsxs)("div", {
                                    className: "input-group",
                                    children: [
                                      Object(F.jsx)("div", {
                                        className: "input-group-prepend",
                                        children: Object(F.jsx)("div", {
                                          className: "input-group-text",
                                          children: Object(F.jsx)("i", {
                                            className: "fas fa-pen",
                                          }),
                                        }),
                                      }),
                                      Object(F.jsx)("input", {
                                        onChange: o,
                                        value: r.bonus,
                                        type: "number",
                                        id: "bonus",
                                        name: "bonus",
                                        className: "form-control",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(F.jsxs)("div", {
                                className: "form-group col-md-12 ",
                                children: [
                                  Object(F.jsx)("label", {
                                    children: "Enter Reason",
                                  }),
                                  Object(F.jsxs)("div", {
                                    className: "input-group",
                                    children: [
                                      Object(F.jsx)("div", {
                                        className: "input-group-prepend",
                                        children: Object(F.jsx)("div", {
                                          className: "input-group-text",
                                          children: Object(F.jsx)("i", {
                                            className: "fas fa-book",
                                          }),
                                        }),
                                      }),
                                      Object(F.jsx)("input", {
                                        onChange: o,
                                        value: r.reasonForBonus,
                                        type: "text",
                                        id: "reasonForBonus",
                                        name: "reasonForBonus",
                                        className: "form-control",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              Object(F.jsx)("div", {
                                className: "form-group text-center col-md-12",
                                children: Object(F.jsx)("button", {
                                  className: "btn btn-primary btn-lg",
                                  type: "submit",
                                  style: { width: "30vh" },
                                  children: "Update Salary",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : Object(F.jsx)(K, {}),
        });
      };
      s(71);
      var st = () => {
        const { user: e } = Object(S.c)((e) => e.authSlice),
          [t, s] = Object(c.useState)([]),
          [a, n] = Object(c.useState)(!0),
          [l, i] = Object(c.useState)(null),
          [r, d] = Object(c.useState)({});
        Object(c.useEffect)(() => {
          (async () => {
            try {
              const e = await m();
              console.log("Employees fetched:", e), s(e.data);
            } catch (e) {
              console.error(e), j.b.error("Failed to fetch employees.");
            } finally {
              n(!1);
            }
          })();
        }, []);
        const o = (e, t) => {
            const { name: s, value: c } = e.target;
            d((e) => ({ ...e, [t]: { ...e[t], [s]: c } }));
          },
          h = async (e) => {
            const { attendanceDate: t, status: s } = r[e] || {};
            if (t && s)
              if (new Date(t) > new Date())
                j.b.error("Attendance date cannot be in the future.");
              else {
                i(e);
                try {
                  const a = await ((c = {
                    employeeID: e,
                    attendanceDate: t,
                    status: s,
                  }),
                  b.post("/admin/mark-employee-attendance", c));
                  console.log("Attendance mark response:", a);
                  const { success: n, message: l } = a;
                  n
                    ? j.b.success(l)
                    : j.b.error("Failed to mark attendance. Please try again.");
                } catch (a) {
                  console.error("Error marking attendance:", a),
                    j.b.error("An error occurred while marking attendance.");
                } finally {
                  i(null);
                }
                var c;
              }
            else j.b.error("Please select a valid date and status.");
          };
        return Object(F.jsx)("div", {
          className: "main-content",
          children: Object(F.jsx)("section", {
            className: "section",
            children: Object(F.jsxs)("div", {
              className: "card",
              children: [
                Object(F.jsx)("div", {
                  className: "card-header d-flex justify-content-between",
                  children: Object(F.jsx)("h4", {
                    className: "attendance-header",
                    children: "Mark Attendance",
                  }),
                }),
                Object(F.jsx)("div", {
                  className: "card-body",
                  children: a
                    ? Object(F.jsx)(K, {})
                    : Object(F.jsx)("div", {
                        children:
                          0 === t.length
                            ? Object(F.jsx)("p", {
                                children:
                                  "No employees available to mark attendance.",
                              })
                            : t.map((e) => {
                                var t, s, c, a;
                                return Object(F.jsxs)(
                                  "div",
                                  {
                                    className: "attendance-item mb-3",
                                    children: [
                                      Object(F.jsx)("span", {
                                        className: "employee-name",
                                        children: e.name,
                                      }),
                                      Object(F.jsx)("input", {
                                        type: "date",
                                        name: "attendanceDate",
                                        value:
                                          (null === (t = r[e.id]) ||
                                          void 0 === t
                                            ? void 0
                                            : t.attendanceDate) || "",
                                        onChange: (t) => o(t, e.id),
                                        className:
                                          "form-control my-2 attendance-date",
                                        max: new Date()
                                          .toISOString()
                                          .split("T")[0],
                                      }),
                                      Object(F.jsxs)("select", {
                                        name: "status",
                                        value:
                                          (null === (s = r[e.id]) ||
                                          void 0 === s
                                            ? void 0
                                            : s.status) || "",
                                        onChange: (t) => o(t, e.id),
                                        className:
                                          "form-control my-2 attendance-status",
                                        children: [
                                          Object(F.jsx)("option", {
                                            value: "",
                                            children: "Select Status",
                                          }),
                                          Object(F.jsx)("option", {
                                            value: "Present",
                                            children: "Present",
                                          }),
                                          Object(F.jsx)("option", {
                                            value: "Absent",
                                            children: "Absent",
                                          }),
                                          Object(F.jsx)("option", {
                                            value: "Half Day",
                                            children: "Half Day",
                                          }),
                                        ],
                                      }),
                                      Object(F.jsx)("button", {
                                        className:
                                          "btn btn-primary attendance-button",
                                        onClick: () =>
                                          (async (e) => {
                                            window.confirm(
                                              "Are you sure you want to mark attendance?"
                                            ) && (await h(e));
                                          })(e.id),
                                        disabled:
                                          l === e.id ||
                                          !(
                                            null !== (c = r[e.id]) &&
                                            void 0 !== c &&
                                            c.attendanceDate
                                          ) ||
                                          !(
                                            null !== (a = r[e.id]) &&
                                            void 0 !== a &&
                                            a.status
                                          ),
                                        children:
                                          l === e.id
                                            ? "Loading..."
                                            : "Mark Attendance",
                                      }),
                                    ],
                                  },
                                  e._id
                                );
                              }),
                      }),
                }),
              ],
            }),
          }),
        });
      };
      const ct = (e) => {
          let { children: t, ...s } = e;
          const { isAuth: c } = Object(S.c)((e) => e.authSlice);
          return Object(F.jsx)(i.Route, {
            ...s,
            render: (e) => {
              let { location: s } = e;
              return c
                ? Object(F.jsx)(i.Redirect, {
                    to: { pathname: "/home", state: { from: s } },
                  })
                : t;
            },
          });
        },
        at = (e) => {
          let { children: t, ...s } = e;
          const { isAuth: c } = Object(S.c)((e) => e.authSlice);
          return Object(F.jsx)(i.Route, {
            ...s,
            render: (e) => {
              let { location: s } = e;
              return c
                ? Object(F.jsxs)(F.Fragment, {
                    children: [Object(F.jsx)(Me, {}), Object(F.jsx)(Ue, {}), t],
                  })
                : Object(F.jsx)(i.Redirect, {
                    to: { pathname: "/", state: { from: s } },
                  });
            },
          });
        },
        nt = (e) => {
          let { children: t, ...s } = e;
          const { user: c } = Object(S.c)((e) => e.authSlice);
          return Object(F.jsx)(i.Route, {
            ...s,
            render: (e) => {
              let { location: s } = e;
              return c && "Admin" === c.type
                ? Object(F.jsxs)(F.Fragment, {
                    children: [Object(F.jsx)(Me, {}), Object(F.jsx)(Ue, {}), t],
                  })
                : Object(F.jsx)(i.Redirect, {
                    to: { pathname: "/", state: { from: s } },
                  });
            },
          });
        },
        lt = (e) => {
          let { children: t, ...s } = e;
          const { user: c } = Object(S.c)((e) => e.authSlice);
          return Object(F.jsx)(i.Route, {
            ...s,
            render: (e) => {
              let { location: s } = e;
              return c && "Leader" === c.type
                ? Object(F.jsxs)(F.Fragment, {
                    children: [Object(F.jsx)(Me, {}), Object(F.jsx)(Ue, {}), t],
                  })
                : Object(F.jsx)(i.Redirect, {
                    to: { pathname: "/", state: { from: s } },
                  });
            },
          });
        },
        it = (e) => {
          let { children: t, ...s } = e;
          const { user: c } = Object(S.c)((e) => e.authSlice);
          return Object(F.jsx)(i.Route, {
            ...s,
            render: (e) => {
              let { location: s } = e;
              return (c && "Employee" === c.type) || "Leader" === c.type
                ? Object(F.jsxs)(F.Fragment, {
                    children: [Object(F.jsx)(Me, {}), Object(F.jsx)(Ue, {}), t],
                  })
                : Object(F.jsx)(i.Redirect, {
                    to: { pathname: "/", state: { from: s } },
                  });
            },
          });
        };
      var rt = () =>
        (() => {
          const [e, t] = Object(c.useState)(!0),
            s = Object(S.b)();
          return (
            Object(c.useEffect)(() => {
              (async () => {
                try {
                  const e = await d.a.get(
                    "https://paisa4youhr-api.onrender.com/api/auth/refresh",
                    { withCredentials: !0 }
                  );
                  200 === e.status
                    ? (e.data.success && s(E(e.data.user)), t(!1))
                    : t(!1);
                } catch (e) {
                  console.log(e), t(!1);
                }
              })();
            }),
            e
          );
        })()
          ? Object(F.jsx)(K, {})
          : Object(F.jsxs)(i.Switch, {
              children: [
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/userTeams",
                  children: Object(F.jsx)(_e, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/userteam/:id",
                  children: Object(F.jsx)(Ge, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/dashboardEmployee",
                  children: Object(F.jsx)(Ke, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/userAttendance",
                  children: Object(F.jsx)(Ye, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/applyforleave",
                  children: Object(F.jsx)(Je, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/userSalary",
                  children: Object(F.jsx)(We, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/userLeaveApplications",
                  children: Object(F.jsx)(qe, {}),
                }),
                Object(F.jsx)(it, {
                  exact: !0,
                  path: "/userLeaveApplications/:id",
                  children: Object(F.jsx)(ze, {}),
                }),
                Object(F.jsx)(ct, {
                  exact: !0,
                  path: "/",
                  children: Object(F.jsx)(R, {}),
                }),
                Object(F.jsx)(ct, {
                  exact: !0,
                  path: "/login",
                  children: Object(F.jsx)(R, {}),
                }),
                Object(F.jsx)(ct, {
                  exact: !0,
                  path: "/forgot",
                  children: Object(F.jsx)(M, {}),
                }),
                Object(F.jsx)(at, {
                  exact: !0,
                  path: "/home",
                  children: Object(F.jsx)(z, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/employees",
                  children: Object(F.jsx)(Q, {}),
                }),
                Object(F.jsx)(lt, {
                  exact: !0,
                  path: "/members",
                  children: Object(F.jsx)(Be, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/admins",
                  children: Object(F.jsx)(Z, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/teams",
                  children: Object(F.jsx)(me, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/adduser",
                  children: Object(F.jsx)(pe, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/attendance",
                  children: Object(F.jsx)(Ve, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/markAttendance",
                  children: Object(F.jsx)(st, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/leaves",
                  children: Object(F.jsx)(Qe, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/assignSalary",
                  children: Object(F.jsx)(Ze, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/salaries",
                  children: Object(F.jsx)(et, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/leaves/:id",
                  children: Object(F.jsx)(Xe, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/salary/:id",
                  children: Object(F.jsx)(tt, {}),
                }),
                Object(F.jsx)(nt, {
                  exact: !0,
                  path: "/addteam",
                  children: Object(F.jsx)(ue, {}),
                }),
                Object(F.jsx)(nt, {
                  path: "/employee/:id",
                  children: Object(F.jsx)(ve, {}),
                }),
                Object(F.jsx)(nt, {
                  path: "/team/:id",
                  children: Object(F.jsx)(Ee, {}),
                }),
                Object(F.jsx)(nt, {
                  path: "/edituser/:id",
                  children: Object(F.jsx)(ke, {}),
                }),
                Object(F.jsx)(nt, {
                  path: "/editteam/:id",
                  children: Object(F.jsx)(Ce, {}),
                }),
                Object(F.jsx)(nt, {
                  path: "/admin/:id",
                  children: Object(F.jsx)(Fe, {}),
                }),
                Object(F.jsx)(nt, {
                  path: "/leaders",
                  children: Object(F.jsx)(Re, {}),
                }),
              ],
            });
      var dt = (e) => {
        e &&
          e instanceof Function &&
          s
            .e(3)
            .then(s.bind(null, 76))
            .then((t) => {
              let {
                getCLS: s,
                getFID: c,
                getFCP: a,
                getLCP: n,
                getTTFB: l,
              } = t;
              s(e), c(e), a(e), n(e), l(e);
            });
      };
      var jt = Object(A.configureStore)({
        reducer: { authSlice: C, mainSlice: H, teamSlice: ie, userSlice: oe },
      });
      l.a.render(
        Object(F.jsx)(a.a.StrictMode, {
          children: Object(F.jsx)(S.a, {
            store: jt,
            children: Object(F.jsxs)(r.a, {
              children: [Object(F.jsx)(rt, {}), Object(F.jsx)(j.a, {})],
            }),
          }),
        }),
        document.getElementById("root")
      ),
        dt();
    },
  },
  [[72, 1, 2]],
]);
//# sourceMappingURL=main.f886f25f.chunk.js.map
