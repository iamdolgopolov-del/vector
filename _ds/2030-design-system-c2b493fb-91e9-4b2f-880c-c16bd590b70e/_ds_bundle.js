/* @ds-bundle: {"format":3,"namespace":"Ds2030DesignSystem_c2b493","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"FeatureItem","sourcePath":"components/marketing/FeatureItem.jsx"},{"name":"PriceCard","sourcePath":"components/marketing/PriceCard.jsx"},{"name":"SectionHeading","sourcePath":"components/marketing/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/marketing/StatCard.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"0091c1203b83","components/core/Badge.jsx":"ac36a0422814","components/core/Button.jsx":"7814249a64c9","components/core/Card.jsx":"d6152959655f","components/core/Pill.jsx":"39ccc4f7fee4","components/feedback/Accordion.jsx":"d2ffbcc7dcb8","components/forms/Checkbox.jsx":"b52c34204875","components/forms/Input.jsx":"f3f0c986e1c5","components/forms/Textarea.jsx":"31f84ea309b2","components/marketing/FeatureItem.jsx":"eb295562e0bf","components/marketing/PriceCard.jsx":"20fcacba8901","components/marketing/SectionHeading.jsx":"52d9daff58bd","components/marketing/StatCard.jsx":"b3399811b032","components/marketing/Testimonial.jsx":"9f75f1e3d6f4","components/navigation/NavBar.jsx":"64fde20e719b","components/navigation/Tabs.jsx":"3bca90319c63","ui_kits/landing/site.js":"eb29beb2869f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds2030DesignSystem_c2b493 = window.Ds2030DesignSystem_c2b493 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular portrait used in testimonials and the mentor block.
 * Falls back to initials on a tinted indigo ground when no `src`.
 */
function Avatar({
  src = null,
  name = '',
  size = 48,
  ring = false,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--indigo-100)',
      color: 'var(--brand)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: Math.round(size * 0.36),
      lineHeight: 1,
      boxShadow: ring ? '0 0 0 3px var(--white), 0 0 0 4px var(--indigo-100)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '•');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small, solid status/label token. Distinct from Pill: no
 * glass blur, used inline for prices, counts and emphatic micro-labels.
 */
function Badge({
  tone = 'indigo',
  size = 'md',
  children,
  style = {},
  ...rest
}) {
  const tones = {
    indigo: {
      background: 'var(--brand)',
      color: '#fff'
    },
    green: {
      background: 'var(--success)',
      color: '#fff'
    },
    red: {
      background: 'var(--danger)',
      color: '#fff'
    },
    'green-soft': {
      background: 'var(--green-bubble)',
      color: 'var(--green-600)'
    },
    neutral: {
      background: 'var(--surface-canvas)',
      color: 'var(--ink-700)'
    },
    'indigo-soft': {
      background: 'var(--indigo-100)',
      color: 'var(--brand)'
    }
  };
  const sizes = {
    sm: {
      height: 22,
      padding: '0 8px',
      fontSize: 'var(--text-xs)'
    },
    md: {
      height: 26,
      padding: '0 10px',
      fontSize: 'var(--text-sm)'
    }
  };
  const v = tones[tone] || tones.indigo;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: s.height,
      padding: s.padding,
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.fontSize,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's primary action control.
 * Indigo fill is the default; red is reserved for high-urgency CTAs,
 * green for confirmation. Secondary is a hairline-outlined white pill.
 */
function Button({
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  icon = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      height: 36,
      padding: '0 16px',
      fontSize: 'var(--text-sm)',
      gap: 8
    },
    md: {
      height: 48,
      padding: '0 24px',
      fontSize: 'var(--text-body)',
      gap: 10
    },
    lg: {
      height: 60,
      padding: '0 32px',
      fontSize: 'var(--text-body)',
      gap: 12
    }
  };
  const variants = {
    primary: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      boxShadow: 'none'
    },
    danger: {
      background: 'var(--danger)',
      color: '#fff',
      boxShadow: 'none'
    },
    success: {
      background: 'var(--success)',
      color: '#fff',
      boxShadow: 'none'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--ring-hairline)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--brand)',
      boxShadow: 'none'
    },
    'on-brand': {
      background: 'var(--white)',
      color: 'var(--brand)',
      boxShadow: 'none'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      border: 'none',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'filter var(--dur) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), background var(--dur) var(--ease-standard)',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(0.92)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
      e.currentTarget.style.transform = 'none';
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'none';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's surface primitive. White, generously rounded,
 * soft drop shadow. Use `tone="brand"` for the deep-indigo panels and
 * `tone="sunk"` for nested blocks on the canvas. `interactive` adds a
 * lift on hover.
 */
function Card({
  tone = 'default',
  radius = 'lg',
  pad = 24,
  interactive = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--color-surface)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--shadow-sm)'
    },
    flat: {
      background: 'var(--color-surface)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--ring-faint)'
    },
    sunk: {
      background: 'var(--surface-canvas)',
      color: 'var(--ink-900)',
      boxShadow: 'none'
    },
    brand: {
      background: 'var(--brand)',
      color: 'var(--on-brand)',
      boxShadow: 'var(--shadow-md)'
    },
    outline: {
      background: 'var(--color-surface)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--ring-hairline)'
    }
  };
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)'
  };
  const v = tones[tone] || tones.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius] || radii.lg,
      padding: typeof pad === 'number' ? pad : pad,
      transition: 'transform var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard)',
      ...v,
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = v.boxShadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill — the floating glass chip used across the brand for eyebrow
 * labels, meta tags ("6 месяцев") and tariff selectors. White,
 * backdrop-blurred, fully rounded. `active` fills it with indigo.
 */
function Pill({
  active = false,
  tone = 'default',
  icon = null,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    default: active ? {
      background: 'var(--brand)',
      color: 'var(--on-brand)'
    } : {
      background: 'rgba(255,255,255,0.85)',
      color: 'var(--ink-900)'
    },
    indigo: {
      background: 'var(--brand)',
      color: 'var(--on-brand)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--brand)',
      boxShadow: 'inset 0 0 0 1px var(--indigo-300)'
    },
    'on-brand': {
      background: 'rgba(255,255,255,0.16)',
      color: 'var(--white)'
    }
  };
  const v = tones[tone] || tones.default;
  const interactive = !!rest.onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 30,
      padding: '0 15px',
      borderRadius: 'var(--radius-pill)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      fontFamily: 'var(--font-sans)',
      fontWeight: active ? 'var(--fw-medium)' : 'var(--fw-regular)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)',
      ...v,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/**
 * Accordion — used for the FAQ and the course-programme module lists.
 * White rows on the canvas; a thin divider between items; the open
 * row reveals its body with an indigo "−" / "+" affordance.
 */
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  tone = 'card',
  style = {}
}) {
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = i => {
    setOpen(prev => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);else next.add(i);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.has(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: tone === 'sunk' ? 'var(--surface-canvas)' : 'var(--white)',
        borderRadius: 'var(--radius-md)',
        boxShadow: tone === 'sunk' ? 'none' : 'var(--shadow-xs)',
        overflow: 'hidden',
        transition: 'box-shadow var(--dur) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--text-h3)',
        letterSpacing: 'var(--tracking-tight)',
        color: 'var(--ink-900)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        width: 32,
        height: 32,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isOpen ? 'var(--brand)' : 'var(--surface-canvas)',
        color: isOpen ? '#fff' : 'var(--ink-600)',
        transition: 'background var(--dur) var(--ease-standard), transform var(--dur) var(--ease-standard)',
        transform: isOpen ? 'rotate(180deg)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 6l4 4 4-4"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-slow) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 24px 22px',
        fontSize: 'var(--text-body)',
        lineHeight: 'var(--lh-normal)',
        color: 'var(--text-secondary)'
      }
    }, it.a))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — square, lightly rounded. Checked fills with indigo and
 * shows a white tick. `tone="on-brand"` for use on dark sections (the
 * consent checkbox in the lead form).
 */
function Checkbox({
  checked = false,
  onChange,
  label = null,
  tone = 'light',
  disabled = false,
  style = {},
  ...rest
}) {
  const onBrand = tone === 'on-brand';
  const box = {
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: 6,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background var(--dur) var(--ease-standard), box-shadow var(--dur) var(--ease-standard)',
    background: checked ? 'var(--brand)' : onBrand ? 'transparent' : 'var(--white)',
    boxShadow: checked ? 'none' : onBrand ? 'inset 0 0 0 1px var(--border-on-brand)' : 'inset 0 0 0 1px var(--border-strong)'
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: box
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 7.5l2.5 2.5L11 4"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: onBrand ? 'var(--text-on-brand-soft)' : 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. `variant="light"` is the white
 * card field used on the canvas; `variant="on-brand"` is the deep
 * indigo field used inside dark sections (e.g. the lead form).
 */
function Input({
  variant = 'light',
  label = null,
  hint = null,
  invalid = false,
  style = {},
  id,
  ...rest
}) {
  const base = {
    width: '100%',
    height: 60,
    padding: '0 24px',
    borderRadius: 'var(--radius-sm)',
    border: 'none',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-regular)',
    fontSize: 'var(--text-sm)',
    letterSpacing: 'var(--tracking-fine)',
    outline: 'none',
    transition: 'box-shadow var(--dur) var(--ease-standard)'
  };
  const variants = {
    light: {
      background: 'var(--white)',
      color: 'var(--ink-900)',
      boxShadow: invalid ? 'inset 0 0 0 1px var(--danger)' : 'var(--ring-hairline)'
    },
    'on-brand': {
      background: 'var(--field-on-brand)',
      color: 'var(--white)',
      boxShadow: invalid ? 'inset 0 0 0 1px var(--red-400)' : 'none'
    },
    filled: {
      background: 'var(--surface-canvas)',
      color: 'var(--ink-900)',
      boxShadow: invalid ? 'inset 0 0 0 1px var(--danger)' : 'none'
    }
  };
  const onBrand = variant === 'on-brand';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: onBrand ? 'var(--text-on-brand)' : 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    style: {
      ...base,
      ...(variants[variant] || variants.light),
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = onBrand ? 'inset 0 0 0 1px var(--border-on-brand)' : 'inset 0 0 0 1.5px var(--brand)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = (variants[variant] || variants.light).boxShadow;
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 6,
      fontSize: 'var(--text-xs)',
      color: invalid ? 'var(--danger)' : onBrand ? 'var(--text-on-brand-soft)' : 'var(--ink-600)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — multi-line field. Matches Input styling with a taller
 * body. Same light / on-brand / filled variants.
 */
function Textarea({
  variant = 'light',
  label = null,
  rows = 4,
  style = {},
  id,
  ...rest
}) {
  const variants = {
    light: {
      background: 'var(--white)',
      color: 'var(--ink-900)',
      boxShadow: 'var(--ring-hairline)'
    },
    'on-brand': {
      background: 'var(--field-on-brand)',
      color: 'var(--white)',
      boxShadow: 'none'
    },
    filled: {
      background: 'var(--surface-canvas)',
      color: 'var(--ink-900)',
      boxShadow: 'none'
    }
  };
  const onBrand = variant === 'on-brand';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'block',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginBottom: 8,
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      color: onBrand ? 'var(--text-on-brand)' : 'var(--ink-900)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    style: {
      width: '100%',
      padding: '18px 24px',
      borderRadius: 'var(--radius-sm)',
      border: 'none',
      resize: 'vertical',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-regular)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      letterSpacing: 'var(--tracking-fine)',
      outline: 'none',
      transition: 'box-shadow var(--dur) var(--ease-standard)',
      ...(variants[variant] || variants.light),
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.boxShadow = onBrand ? 'inset 0 0 0 1px var(--border-on-brand)' : 'inset 0 0 0 1.5px var(--brand)';
    },
    onBlur: e => {
      e.currentTarget.style.boxShadow = (variants[variant] || variants.light).boxShadow;
    }
  }, rest)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FeatureItem — a single benefit/inclusion row. `included` shows the
 * brand green tick; set it false for an excluded line (muted dash).
 */
function FeatureItem({
  included = true,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      marginTop: 1,
      width: 16,
      height: 16,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, included ? /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 14 14",
    fill: "var(--success)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 0C3.14 0 0 3.14 0 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7Zm3.912 5.158L6.439 9.596c-.264.264-.685.281-.965.018L3.105 7.456c-.28-.263-.298-.702-.052-.982.263-.281.701-.299.982-.035L5.912 8.158l4-4c.281-.281.72-.281 1 0 .281.281.281.719 0 1Z"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "var(--ink-400)",
    strokeWidth: "1.5"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "6.25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4.5 7h5",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)',
      color: included ? 'var(--text-secondary)' : 'var(--ink-400)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureItem.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PriceCard.jsx
try { (() => {
/**
 * PriceCard — a tariff column. Highlighted (`featured`) cards flip to
 * the deep-indigo treatment with an on-brand CTA, matching the
 * "Популярный" tariff on the landing page.
 */
function PriceCard({
  name = 'Базовый',
  caption = '',
  price = '',
  oldPrice = '',
  note = '',
  features = [],
  cta = 'Выбрать тариф',
  onCta,
  featured = false,
  style = {}
}) {
  const dark = featured;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: 28,
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--brand)' : 'var(--white)',
      color: dark ? 'var(--on-brand)' : 'var(--ink-900)',
      boxShadow: dark ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: dark ? 'on-brand' : 'outline',
    style: {
      alignSelf: 'flex-start',
      marginBottom: 18
    }
  }, name), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--tracking-tight)',
      marginBottom: 16
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: note ? 4 : 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, price), oldPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-lead)',
      textDecoration: 'line-through',
      opacity: 0.5
    }
  }, oldPrice)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      opacity: 0.7,
      marginBottom: 20
    }
  }, note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 24,
      flex: 1
    }
  }, features.map((f, i) => {
    const obj = typeof f === 'string' ? {
      label: f,
      included: true
    } : f;
    return /*#__PURE__*/React.createElement(__ds_scope.FeatureItem, {
      key: i,
      included: obj.included
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: dark ? obj.included ? 'rgba(255,255,255,0.88)' : 'rgba(255,255,255,0.45)' : undefined
      }
    }, obj.label));
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'on-brand' : 'primary',
    size: "lg",
    fullWidth: true,
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SectionHeading.jsx
try { (() => {
/**
 * SectionHeading — the standard block opener: optional eyebrow pill,
 * a large 50px title, optional lead paragraph. `tone="on-brand"` for
 * dark sections; `align="center"` to centre everything.
 */
function SectionHeading({
  eyebrow = '',
  title = '',
  lead = '',
  tone = 'default',
  align = 'left',
  maxWidth = 720,
  style = {}
}) {
  const dark = tone === 'on-brand';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    tone: dark ? 'on-brand' : 'outline'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-h1)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--tracking-tight)',
      color: dark ? 'var(--on-brand)' : 'var(--ink-900)',
      margin: 0
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-lead)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-normal)',
      color: dark ? 'var(--text-on-brand-soft)' : 'var(--text-secondary)',
      margin: 0
    }
  }, lead));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCard.jsx
try { (() => {
/**
 * StatCard — a single big-number proof point (e.g. average salary,
 * months to first order). `tone="brand"` for placement on indigo.
 */
function StatCard({
  value = '',
  label = '',
  tone = 'default',
  align = 'left',
  style = {}
}) {
  const dark = tone === 'brand';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      padding: 24,
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--brand)' : 'var(--white)',
      color: dark ? 'var(--on-brand)' : 'var(--ink-900)',
      boxShadow: dark ? 'none' : 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 50,
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-normal)',
      color: dark ? 'var(--text-on-brand-soft)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
/**
 * Testimonial — a student review card. White surface, avatar + name +
 * role header, body quote, optional star rating.
 */
function Testimonial({
  name = '',
  role = '',
  avatar = null,
  rating = 0,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: 24,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    name: name,
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--text-body)'
    }
  }, name), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--ink-600)'
    }
  }, role))), rating > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: "16",
    height: "16",
    viewBox: "0 0 20 20",
    fill: i < rating ? 'var(--red-500)' : 'var(--ink-300)'
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15l-5.2 2.6 1-5.8L1.5 7.7l5.9-.9L10 1.5Z"
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--lh-normal)',
      color: 'var(--text-secondary)'
    }
  }, children));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
/**
 * NavBar — the site header: text wordmark on the left, anchor nav in
 * the centre, a primary CTA on the right. Transparent over hero
 * imagery; pass `solid` for a white sticky bar.
 */
function NavBar({
  brand = 'Школа Риты Стой',
  items = ['Программа курса', 'Автор курса', 'Тарифы', 'Отзывы'],
  active = 0,
  onNavigate,
  cta = 'Оставить заявку',
  onCta,
  solid = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      height: 64,
      padding: '0 24px',
      borderRadius: solid ? 'var(--radius-pill)' : 0,
      background: solid ? 'rgba(255,255,255,0.85)' : 'transparent',
      backdropFilter: solid ? 'var(--glass-blur)' : 'none',
      WebkitBackdropFilter: solid ? 'var(--glass-blur)' : 'none',
      boxShadow: solid ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 'var(--text-body)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap'
    }
  }, brand), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(i);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: i === active ? 'var(--fw-medium)' : 'var(--fw-regular)',
      color: i === active ? 'var(--ink-900)' : 'var(--ink-600)',
      whiteSpace: 'nowrap',
      transition: 'color var(--dur) var(--ease-standard)'
    }
  }, it))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      height: 38,
      padding: '0 20px',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--brand)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--fw-medium)',
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, cta));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — selectable segment row. `variant="pill"` is the glass-chip
 * selector (tariff switcher); `variant="text"` is the plain anchor row
 * used in the site header nav.
 */
function Tabs({
  items = [],
  value = 0,
  onChange,
  variant = 'pill',
  tone = 'light',
  style = {}
}) {
  const isPill = variant === 'pill';
  const onBrand = tone === 'on-brand';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isPill ? 8 : 28,
      padding: isPill ? 4 : 0,
      borderRadius: 'var(--radius-pill)',
      background: isPill ? onBrand ? 'rgba(255,255,255,0.12)' : 'var(--white)' : 'transparent',
      boxShadow: isPill && !onBrand ? 'var(--ring-faint)' : 'none',
      ...style
    }
  }, items.map((it, i) => {
    const active = i === value;
    const label = typeof it === 'string' ? it : it.label;
    if (isPill) {
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        role: "tab",
        "aria-selected": active,
        onClick: () => onChange && onChange(i),
        style: {
          height: 38,
          padding: '0 20px',
          border: 'none',
          borderRadius: 'var(--radius-pill)',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-sm)',
          fontWeight: active ? 'var(--fw-medium)' : 'var(--fw-regular)',
          background: active ? 'var(--brand)' : 'transparent',
          color: active ? '#fff' : onBrand ? 'rgba(255,255,255,0.8)' : 'var(--ink-600)',
          transition: 'background var(--dur) var(--ease-standard), color var(--dur) var(--ease-standard)',
          whiteSpace: 'nowrap'
        }
      }, label);
    }
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(i),
      style: {
        padding: '4px 0',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: active ? 'var(--fw-medium)' : 'var(--fw-regular)',
        color: active ? onBrand ? '#fff' : 'var(--ink-900)' : onBrand ? 'rgba(255,255,255,0.7)' : 'var(--ink-600)',
        borderBottom: active ? '2px solid var(--brand)' : '2px solid transparent',
        transition: 'color var(--dur) var(--ease-standard)',
        whiteSpace: 'nowrap'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/site.js
try { (() => {
/* ============================================================
   Иллюстратор 2030 — landing behavior
   Lenis smooth scroll · GSAP ScrollTrigger reveals · brush cursor
   with fading paint trail · magnetic buttons · marquees · accordions
   · gallery hover-preview · scroll-drawn through-line.
   All effects degrade gracefully; cursor/parallax disabled on touch.
   ============================================================ */
(function () {
  'use strict';

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP = !!window.gsap;
  if (hasGSAP && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  /* ---------- PRELOADER ---------- */
  function runPreloader(done) {
    const pl = document.getElementById('preloader');
    const bar = pl.querySelector('.pl-bar');
    const pct = pl.querySelector('.pl-pct');
    const lines = pl.querySelectorAll('.pl-mark .pl-line span');
    document.body.classList.add('is-loading');
    let finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      pl.style.display = 'none';
      document.body.classList.remove('is-loading');
      done();
    }
    // Hard safety: never trap the user even if rAF/GSAP stalls.
    setTimeout(finish, 2300);
    if (!hasGSAP) {
      lines.forEach(l => l.style.transform = 'translateY(0)');
      setTimeout(finish, 300);
      return;
    }
    const tl = gsap.timeline({
      onComplete: finish
    });
    tl.to(lines, {
      yPercent: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08
    }, 0.1).to(bar, {
      scaleX: 1,
      duration: 1.25,
      ease: 'power2.inOut'
    }, 0.15).to({
      v: 0
    }, {
      v: 100,
      duration: 1.25,
      ease: 'power2.inOut',
      onUpdate: function () {
        pct.textContent = Math.round(this.targets()[0].v) + '%';
      }
    }, 0.15).to(pl, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power3.inOut'
    }, '+=0.1').set(pl, {
      display: 'none'
    });
  }

  /* ---------- LENIS SMOOTH SCROLL ---------- */
  let lenis = null;
  function initLenis() {
    if (isTouch || reduced || !window.Lenis) return;
    lenis = new Lenis({
      duration: 1.1,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    if (hasGSAP && window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(t) {
        lenis.raf(t);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
          e.preventDefault();
          lenis.scrollTo(id, {
            offset: -10
          });
        }
      });
    });
  }
  function scrollToSel(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, {
      offset: -10
    });else el.scrollIntoView({
      behavior: reduced ? 'auto' : 'smooth'
    });
  }

  /* ---------- SPLIT TEXT ---------- */
  function splitWords(el) {
    if (el.dataset.split) return;
    const text = el.textContent;
    el.textContent = '';
    el.dataset.split = '1';
    text.split(/(\s+)/).forEach(tok => {
      if (tok === '') return;
      if (/^\s+$/.test(tok)) {
        const sp = document.createElement('span');
        sp.textContent = tok;
        sp.style.whiteSpace = 'pre';
        el.appendChild(sp);
        return;
      }
      const w = document.createElement('span');
      w.className = 'word';
      w.style.display = 'inline-block';
      w.style.willChange = 'transform, opacity';
      w.textContent = tok;
      el.appendChild(w);
    });
    return el.querySelectorAll('.word');
  }

  /* ---------- SCROLL REVEALS ---------- */
  function initReveals() {
    if (!hasGSAP) {
      document.querySelectorAll('[data-fade]').forEach(e => {
        e.style.opacity = 1;
        e.style.transform = 'none';
      });
      return;
    }
    if (reduced) return;

    // line-mask reveals (hero / section heads)
    document.querySelectorAll('[data-reveal-lines] .ln > span').forEach(s => gsap.set(s, {
      yPercent: 110
    }));
    document.querySelectorAll('[data-reveal-lines]').forEach(group => {
      const spans = group.querySelectorAll('.ln > span');
      ScrollTrigger.create({
        trigger: group,
        start: 'top 85%',
        once: true,
        onEnter: () => gsap.to(spans, {
          yPercent: 0,
          duration: 0.9,
          ease: 'power4.out',
          stagger: 0.09
        })
      });
    });

    // word-by-word reveals
    document.querySelectorAll('[data-reveal]').forEach(el => {
      const words = splitWords(el);
      gsap.set(words, {
        yPercent: 60,
        opacity: 0
      });
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.018
        })
      });
    });

    // simple fade-ups
    gsap.utils.toArray('[data-fade]').forEach((el, i) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          once: true
        }
      });
    });

    // parallax on tagged elements
    if (!isTouch) {
      gsap.utils.toArray('[data-parallax]').forEach(el => {
        const amt = parseFloat(el.dataset.parallax) || 0.15;
        gsap.to(el, {
          yPercent: -amt * 100,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    }
  }

  /* ---------- MARQUEE ---------- */
  function initMarquees() {
    document.querySelectorAll('.marquee-track').forEach(track => {
      // duplicate content for seamless loop
      track.innerHTML += track.innerHTML;
      const dir = track.dataset.dir === 'right' ? 1 : -1;
      const speed = parseFloat(track.dataset.speed) || 28;
      let x = 0,
        half = 0,
        last = performance.now();
      function measure() {
        half = track.scrollWidth / 2;
      }
      measure();
      window.addEventListener('resize', measure);
      if (reduced) return;
      function tick(now) {
        const dt = (now - last) / 1000;
        last = now;
        x += dir * speed * dt;
        if (dir < 0 && -x >= half) x += half;
        if (dir > 0 && x >= 0) x -= half;
        track.style.transform = 'translateX(' + x + 'px)';
        requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* ---------- CUSTOM BRUSH CURSOR + PAINT TRAIL ---------- */
  function initCursor() {
    return; /* classic system cursor — custom brush cursor removed per feedback */
    if (isTouch) return;
    const dot = document.getElementById('cursor');
    const label = document.getElementById('cursor-label');
    const canvas = document.getElementById('brush-canvas');
    const ctx = canvas.getContext('2d');
    let W,
      H,
      dpr = Math.min(window.devicePixelRatio || 1, 2);
    function size() {
      W = canvas.width = innerWidth * dpr;
      H = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + 'px';
      canvas.style.height = innerHeight + 'px';
    }
    size();
    addEventListener('resize', size);
    let mx = innerWidth / 2,
      my = innerHeight / 2,
      px = mx,
      py = my;
    let cx = mx,
      cy = my; // eased cursor dot
    let lastPaint = 0;
    addEventListener('pointermove', e => {
      mx = e.clientX;
      my = e.clientY;
      if (label.dataset.on === '1') {
        label.style.left = mx + 'px';
        label.style.top = my + 'px';
      }
    }, {
      passive: true
    });
    addEventListener('pointerdown', () => dot.classList.add('is-down'));
    addEventListener('pointerup', () => dot.classList.remove('is-down'));

    // paint a soft brush dab
    function dab(x, y, r, a) {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,45,68,' + a + ')');
      g.addColorStop(1, 'rgba(255,45,68,0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    function loop(now) {
      // ease dot
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;
      dot.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)' + (dot.classList.contains('is-down') ? ' scale(0.8)' : '');

      // fade existing paint (trail vanishes ~1s)
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0,0,0,0.06)';
      ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';

      // draw stroke between last and current scaled positions
      const sx = mx * dpr,
        sy = my * dpr,
        lx = px * dpr,
        ly = py * dpr;
      const dist = Math.hypot(sx - lx, sy - ly);
      const steps = Math.max(1, Math.floor(dist / 4));
      const vr = Math.min(13, 5 + dist * 0.25) * dpr;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        dab(lx + (sx - lx) * t, ly + (sy - ly) * t, vr, 0.10);
      }
      px = mx;
      py = my;
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    // hover states on interactive elements
    document.querySelectorAll('a, button, .btn, [data-cursor], .prog-head, .faq-head, .gal-row, .gal-tab').forEach(el => {
      el.addEventListener('pointerenter', () => {
        dot.classList.add('is-hover');
        const lab = el.getAttribute('data-cursor-label');
        if (lab) {
          label.textContent = lab;
          label.style.opacity = 1;
          label.dataset.on = '1';
        }
      });
      el.addEventListener('pointerleave', () => {
        dot.classList.remove('is-hover');
        label.style.opacity = 0;
        label.dataset.on = '0';
      });
    });
  }

  /* ---------- MAGNETIC BUTTONS ---------- */
  function initMagnetic() {
    if (isTouch || !hasGSAP) return;
    document.querySelectorAll('[data-magnetic]').forEach(el => {
      const strength = parseFloat(el.dataset.magnetic) || 0.4;
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * strength;
        const y = (e.clientY - (r.top + r.height / 2)) * strength;
        gsap.to(el, {
          x,
          y,
          duration: 0.5,
          ease: 'power3.out'
        });
      });
      el.addEventListener('pointerleave', () => gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1,0.4)'
      }));
    });
  }

  /* ---------- ACCORDIONS ---------- */
  function initAccordions() {
    document.querySelectorAll('[data-accordion]').forEach(group => {
      const items = group.querySelectorAll('[data-acc-item]');
      items.forEach(item => {
        item.querySelector('[data-acc-head]').addEventListener('click', () => {
          const open = item.classList.contains('open');
          items.forEach(i => i.classList.remove('open'));
          if (!open) item.classList.add('open');
          if (hasGSAP && window.ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 520);
        });
      });
    });
  }

  /* ---------- GALLERY ---------- */
  function initGallery() {
    const preview = document.querySelector('.gal-preview');
    const img = preview ? preview.querySelector('img') : null;
    const rows = document.querySelectorAll('.gal-row');
    if (preview && !isTouch) {
      let tx = 0,
        ty = 0,
        vx = 0,
        vy = 0,
        active = false;
      addEventListener('pointermove', e => {
        tx = e.clientX;
        ty = e.clientY;
      }, {
        passive: true
      });
      function follow() {
        vx += (tx - vx) * 0.12;
        vy += (ty - vy) * 0.12;
        preview.style.transform = 'translate(' + vx + 'px,' + vy + 'px) translate(-50%,-50%) scale(' + (active ? 1 : 0.85) + ')';
        requestAnimationFrame(follow);
      }
      follow();
      rows.forEach(row => {
        row.addEventListener('pointerenter', () => {
          const src = row.getAttribute('data-img');
          if (src && img) img.src = src;
          active = true;
          preview.style.opacity = 1;
        });
        row.addEventListener('pointerleave', () => {
          active = false;
          preview.style.opacity = 0;
        });
      });
    }
    // tabs
    const tabs = document.querySelectorAll('.gal-tab');
    const panes = document.querySelectorAll('[data-gal-pane]');
    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const k = tab.dataset.galTab;
      panes.forEach(p => p.style.display = p.dataset.galPane === k ? '' : 'none');
      if (hasGSAP && window.ScrollTrigger) ScrollTrigger.refresh();
    }));
  }

  /* ---------- THROUGH-LINE ---------- */
  function initThread() {
    const path = document.querySelector('#thread path');
    if (!path || !hasGSAP || reduced) return;
    const len = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: len,
      strokeDashoffset: len
    });
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6
      }
    });
  }

  /* ---------- CONTACT MODAL ---------- */
  function initContactModal() {
    const modal = document.getElementById('contact-modal');
    if (!modal) return;
    const open = () => {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      if (lenis) lenis.stop();
    };
    const close = () => {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      if (lenis) lenis.start();
    };
    document.querySelectorAll('[data-contact]').forEach(b => b.addEventListener('click', e => {
      e.preventDefault();
      open();
    }));
    modal.querySelectorAll('[data-contact-close]').forEach(b => b.addEventListener('click', close));
    modal.addEventListener('click', e => {
      if (e.target === modal) close();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
    });
  }

  /* ---------- BOOT ---------- */
  function boot() {
    initLenis();
    initMarquees();
    initCursor();
    initMagnetic();
    initAccordions();
    initGallery();
    initContactModal();
    initReveals();
    initThread();
    // expose nav helpers
    window.__scrollTo = scrollToSel;
    document.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => scrollToSel(b.dataset.goto)));
    if (hasGSAP && window.ScrollTrigger) setTimeout(() => ScrollTrigger.refresh(), 400);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => runPreloader(boot));
  } else {
    runPreloader(boot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/site.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.FeatureItem = __ds_scope.FeatureItem;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
