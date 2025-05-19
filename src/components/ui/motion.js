'use client';

import { motion } from 'framer-motion';

// Animation variants for fade in sections
export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// Higher order component
export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionP = motion.p;
export const MotionSpan = motion.span;
export const MotionA = motion.a;
export const MotionButton = motion.button;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
export const MotionImg = motion.img;
export const MotionNav = motion.nav;
export const MotionHeader = motion.header;
export const MotionFooter = motion.footer;
export const MotionMain = motion.main;
export const MotionArticle = motion.article;
export const MotionAside = motion.aside;
export const MotionForm = motion.form;
export const MotionInput = motion.input;
export const MotionTextarea = motion.textarea;
export const MotionSelect = motion.select;
export const MotionOption = motion.option;
export const MotionLabel = motion.label;
export const MotionFieldset = motion.fieldset;
export const MotionLegend = motion.legend;
export const MotionTable = motion.table;
export const MotionThead = motion.thead;
export const MotionTbody = motion.tbody;
export const MotionTr = motion.tr;
export const MotionTh = motion.th;
export const MotionTd = motion.td;
export const MotionCaption = motion.caption;
export const MotionColgroup = motion.colgroup;
export const MotionCol = motion.col;
export const MotionFigure = motion.figure;
export const MotionFigcaption = motion.figcaption;
export const MotionBlockquote = motion.blockquote;
export const MotionCite = motion.cite;
export const MotionCode = motion.code;
export const MotionPre = motion.pre;
export const MotionSamp = motion.samp;
export const MotionKbd = motion.kbd;
export const MotionVar = motion.var;
export const MotionTime = motion.time;
export const MotionMark = motion.mark;
export const MotionSmall = motion.small;
export const MotionStrong = motion.strong;
export const MotionEm = motion.em;
export const MotionI = motion.i;
export const MotionB = motion.b;
export const MotionU = motion.u;
export const MotionS = motion.s;
export const MotionQ = motion.q;
export const MotionDfn = motion.dfn;
export const MotionAbbr = motion.abbr;
export const MotionData = motion.data;
export const MotionOutput = motion.output;
export const MotionProgress = motion.progress;
export const MotionMeter = motion.meter;
export const MotionDetails = motion.details;
export const MotionSummary = motion.summary;
export const MotionMenu = motion.menu;
export const MotionCommand = motion.command;
export const MotionDialog = motion.dialog;
export const MotionSlot = motion.slot;
export const MotionTemplate = motion.template;
export const MotionCanvas = motion.canvas;
export const MotionMap = motion.map;
export const MotionArea = motion.area;
export const MotionVideo = motion.video;
export const MotionAudio = motion.audio;
export const MotionTrack = motion.track;
export const MotionSource = motion.source;
export const MotionEmbed = motion.embed;
export const MotionObject = motion.object;
export const MotionParam = motion.param;
export const MotionPicture = motion.picture;
export const MotionPortal = motion.portal;
export const MotionSvg = motion.svg;
export const MotionPath = motion.path;
export const MotionRect = motion.rect;
export const MotionCircle = motion.circle;
export const MotionEllipse = motion.ellipse;
export const MotionLine = motion.line;
export const MotionPolyline = motion.polyline;
export const MotionPolygon = motion.polygon;
export const MotionText = motion.text;
export const MotionTspan = motion.tspan;
export const MotionTextPath = motion.textPath;
export const MotionDefs = motion.defs;
export const MotionLinearGradient = motion.linearGradient;
export const MotionRadialGradient = motion.radialGradient;
export const MotionStop = motion.stop;
export const MotionClipPath = motion.clipPath;
export const MotionMask = motion.mask;
export const MotionFilter = motion.filter;
export const MotionFeBlend = motion.feBlend;
export const MotionFeColorMatrix = motion.feColorMatrix;
export const MotionFeComponentTransfer = motion.feComponentTransfer;
export const MotionFeComposite = motion.feComposite;
export const MotionFeConvolveMatrix = motion.feConvolveMatrix;
export const MotionFeDiffuseLighting = motion.feDiffuseLighting;
export const MotionFeDisplacementMap = motion.feDisplacementMap;
export const MotionFeDistantLight = motion.feDistantLight;
export const MotionFeDropShadow = motion.feDropShadow;
export const MotionFeFlood = motion.feFlood;
export const MotionFeFuncA = motion.feFuncA;
export const MotionFeFuncB = motion.feFuncB;
export const MotionFeFuncG = motion.feFuncG;
export const MotionFeFuncR = motion.feFuncR;
export const MotionFeGaussianBlur = motion.feGaussianBlur;
export const MotionFeImage = motion.feImage;
export const MotionFeMerge = motion.feMerge;
export const MotionFeMergeNode = motion.feMergeNode;
export const MotionFeMorphology = motion.feMorphology;
export const MotionFeOffset = motion.feOffset;
export const MotionFePointLight = motion.fePointLight;
export const MotionFeSpecularLighting = motion.feSpecularLighting;
export const MotionFeSpotLight = motion.feSpotLight;
export const MotionFeTile = motion.feTile;
export const MotionFeTurbulence = motion.feTurbulence;
export const MotionAnimate = motion.animate;
export const MotionSet = motion.set;
export const MotionAnimateMotion = motion.animateMotion;
export const MotionAnimateTransform = motion.animateTransform;
export const MotionDiscard = motion.discard;
export const MotionMetadata = motion.metadata;
export const MotionDesc = motion.desc;
export const MotionTitle = motion.title;
export const MotionUse = motion.use;
export const MotionSymbol = motion.symbol;
export const MotionView = motion.view;
export const MotionForeignObject = motion.foreignObject;
export const MotionMarker = motion.marker;
export const MotionPattern = motion.pattern;
export const MotionScript = motion.script;
export const MotionStyle = motion.style;
export const MotionSwitch = motion.switch;
export const MotionG = motion.g; 