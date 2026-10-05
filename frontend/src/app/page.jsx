"use client";
import Link from "next/link";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================================
         HERO CINEMATIC SCROLL
      ========================================================= */

      const heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=70%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      /*
        IMPORTANT:
        The main headline stays visible.
        Only small movement is applied to the typography.
      */

      heroTimeline

        /* Small eyebrow movement */
        .to(
          ".v-eyebrow",
          {
            y: -22,
            opacity: 0.85,
            ease: "none",
          },
          0
        )

        /* Headline gently moves upward */
        .to(
          ".v-hero-copy",
          {
            y: -35,
            ease: "none",
          },
          0
        )

        /* Description moves slightly */
        .to(
          ".v-description",
          {
            y: -20,
            opacity: 0.9,
            ease: "none",
          },
          0
        )

        /* Buttons remain visible */
        .to(
          ".v-actions",
          {
            y: -15,
            ease: "none",
          },
          0
        )

        /* Large ring slowly grows */
        .to(
          ".v-orb-area",
          {
            scale: 1.04,
            y: -12,
            ease: "none",
          },
          0
        )

        /* Dashboard rises from below */
        .to(
          ".v-dashboard",
          {
            y: -145,
            scale: 1.015,
            opacity: 1,
            ease: "power2.out",
          },
          0.08
        )

        /* Slight dashboard glow */
        .to(
          ".v-dashboard-glow",
          {
            opacity: 1,
            scale: 1.05,
            ease: "none",
          },
          0.08
        );

      /* =========================================================
         SECOND DASHBOARD SECTION
      ========================================================= */

      gsap.from(".v-main-dashboard", {
        y: 90,
        opacity: 0,
        scale: 0.97,
        duration: 1.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".v-dashboard-section",
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      /* =========================================================
         SCORE CARDS
      ========================================================= */

      gsap.from(".v-score-card", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".v-score-row",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      /* =========================================================
         CHART
      ========================================================= */

      gsap.from(".v-chart path", {
        strokeDasharray: 1500,
        strokeDashoffset: 1500,
        duration: 1.8,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".v-chart",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      /* =========================================================
         BUTTON MICRO ANIMATION
      ========================================================= */

      gsap.to(".v-primary-glow", {
        opacity: 0.65,
        scale: 1.08,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <main ref={pageRef} className="vulnexa-page">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="v-nav">

        <a href="#home" className="v-logo">
          VULN<span>EXA</span>
        </a>

        <div className="v-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#scanner">Scanner</a>
          <a href="#reports">Reports</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="v-nav-button">
          <span>Start Scan</span>
          <i />
        </button>

      </nav>


      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        ref={heroRef}
        className="v-hero"
        id="home"
      >
        <video
          className="v-bg-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Background atmosphere */}

        <div className="v-background-glow v-bg-one" />
        <div className="v-background-glow v-bg-two" />

        <div className="v-grid" />


        {/* =====================================================
            HERO COPY
        ===================================================== */}

        <div className="v-hero-copy">

          <div className="v-eyebrow">
            <span className="v-dot" />
            AI-POWERED SECURITY
          </div>


          <h1>
            Intelligent
            <br />

            <span>
              Security
            </span>

            <br />

            Powered by AI.
          </h1>


          <p className="v-description">
            Detect vulnerabilities before attackers do.
            VULNEXA continuously analyzes your digital
            environment and turns security risks into
            actionable protection.
          </p>


          <div className="v-actions">


            <div style={{ display: "flex", gap: "10px" }}>
              <Link href="/Login" className="v-nav-button">
                <span>Login</span>
                <i />
              </Link>

              <Link href="/Signup" className="v-nav-button">
                <span>Sign Up</span>
                <i />
              </Link>
            </div>

          </div>

        </div>


        {/* =====================================================
            CINEMATIC ORANGE RING
        ===================================================== */}

        <div className="v-orb-area">

          <div className="v-glow" />

          <div className="v-arc v-arc-back" />

          <div className="v-arc v-arc-soft" />

          <div className="v-arc v-arc-main" />

          <div className="v-arc-highlight" />


          {/* Center orb */}

          <div className="v-orb">

            <div className="v-orb-reflection" />

            <div className="v-orb-inner">
              V
            </div>

          </div>


          <div className="v-orb-label">
            <span />
            THREAT INTELLIGENCE ACTIVE
          </div>

        </div>


        {/* =====================================================
            FLOATING HERO DASHBOARD

            IMPORTANT:
            This is INSIDE the hero now.
        ===================================================== */}

        <div className="v-dashboard-wrap">

          <div className="v-dashboard-glow" />

          <div className="v-dashboard">

            <div className="v-dashboard-logo">
              <span className="v-mini-mark">
                V
              </span>

              <span>
                VULNEXA
              </span>
            </div>


            <div className="v-dashboard-item">

              <small>
                WEBSITES SCANNED
              </small>

              <strong>
                2,584
              </strong>

              <span className="v-item-change">
                +248
              </span>

            </div>


            <div className="v-dashboard-item">

              <small>
                THREATS FOUND
              </small>

              <strong>
                148
              </strong>

              <span className="v-item-change orange">
                ACTIVE
              </span>

            </div>


            <div className="v-dashboard-item">

              <small>
                SECURITY SCORE
              </small>

              <strong className="green">
                92%
              </strong>

              <span className="v-item-change green">
                SECURE
              </span>

            </div>


            <div className="v-dashboard-status">

              <span />

              SYSTEM SECURE

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          DASHBOARD SECTION
      ========================================================= */}

      <section
        className="v-dashboard-section"
        id="scanner"
      >

        <div className="v-section-label">
          VULNEXA SECURITY PLATFORM
        </div>


        <h2>
          See your security.
          <br />

          <span>
            In real time.
          </span>
        </h2>


        <p className="v-section-description">
          Monitor vulnerabilities, threats and security
          performance from one intelligent dashboard.
        </p>


        {/* MAIN DASHBOARD */}

        <div className="v-main-dashboard">

          <div className="v-dashboard-top">

            <div>

              <small>
                SECURITY OVERVIEW
              </small>

              <h3>
                System Protection
              </h3>

            </div>


            <div className="v-live">

              <span />

              LIVE MONITORING

            </div>

          </div>


          {/* SCORE CARDS */}

          <div className="v-score-row">

            <div className="v-score-card">

              <small>
                SECURITY SCORE
              </small>

              <strong>
                92
                <span>%</span>
              </strong>

              <div className="v-progress">
                <div />
              </div>

            </div>


            <div className="v-score-card">

              <small>
                THREATS DETECTED
              </small>

              <strong>
                148
              </strong>

              <p>
                ↑ 12.4% this week
              </p>

            </div>


            <div className="v-score-card">

              <small>
                WEBSITES SCANNED
              </small>

              <strong>
                2,584
              </strong>

              <p>
                +248 this month
              </p>

            </div>

          </div>


          {/* THREAT CHART */}

          <div className="v-chart">

            <div className="v-chart-header">

              <span>
                THREAT ACTIVITY
              </span>

              <span>
                LAST 30 DAYS
              </span>

            </div>


            <div className="v-chart-lines">

              <div />
              <div />
              <div />
              <div />

            </div>


            <svg
              viewBox="0 0 800 220"
              preserveAspectRatio="none"
            >

              <path
                d="
                  M0 180
                  C80 160 100 175 160 135
                  S250 160 310 105
                  S400 125 460 75
                  S550 110 610 65
                  S700 80 800 30
                "
              />

            </svg>

          </div>

        </div>

      </section>


      {/* =========================================================
          GLOBAL CSS
      ========================================================= */}

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: auto;
        }

        body {
          margin: 0;
          background: #020408;
          color: #fff;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        button,
        a {
          font-family: inherit;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }


        /* =====================================================
           MAIN
        ===================================================== */

        .vulnexa-page {
          min-height: 100vh;
          overflow-x: hidden;
          background:
            radial-gradient(
              circle at 50% 25%,
              rgba(15, 45, 75, .28),
              transparent 40%
            ),
            #020408;
        }


        /* =====================================================
           NAVIGATION
        ===================================================== */

        .v-nav {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);

          z-index: 9999;
          backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);

background: rgba(2, 4, 8, 0.75);

border: 1px solid rgbFa(255,255,255,.08);

border-radius: 16px;

margin-top: 12px;
padding: 0 20px;

          width:
            min(
              1180px,
              calc(100% - 60px)
            );

          height: 82px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          border-bottom:
            1px solid
            rgba(255,255,255,.07);
        }


        .v-logo {
          display: flex;
          align-items: center;

          color: #fff;

          text-decoration: none;

          font-size: 19px;
          font-weight: 850;
          letter-spacing: -1px;
        }


        .v-logo span {
          color: #ff9b00;
        }


        .v-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }


      .v-links a {
  color: #ffffff;

  text-decoration: none;

  font-size: 14px;

  font-weight: 600;

  letter-spacing: .5px;

  transition: all .3s ease;
}

.v-links a:hover {
  color: #ff9b00;

  transform: translateY(-2px);
}


        /* =====================================================
           BUTTON SYSTEM
        ===================================================== */

        .v-nav-button {
          position: relative;

          display: flex;
          align-items: center;
          gap: 9px;

          border: 0;

          padding:
            10px 18px;

          border-radius: 999px;

          color: #fff;

          background:
            linear-gradient(
              135deg,
              #ffc229 0%,
              #ff9a00 42%,
              #ff6700 100%
            );

          box-shadow:
            0 0 20px
            rgba(255,126,0,.18),

            inset 0 1px 0
            rgba(255,255,255,.35);

          font-size: 10px;
          font-weight: 700;

          cursor: pointer;
        }


        .v-nav-button i {
          width: 4px;
          height: 4px;

          border-radius: 50%;

          background: #fff;

          box-shadow:
            0 0 7px #fff;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .v-hero {
          position: relative;

          min-height: 100vh;
          height: 100vh;

          overflow: hidden;

          display: flex;
          flex-direction: column;
          align-items: center;

          padding-top: 140px;

          isolation: isolate;

          background:
            radial-gradient(
              ellipse at 50% 42%,
              rgba(20,49,77,.30),
              transparent 44%
            ),
            radial-gradient(
              ellipse at 50% 95%,
              rgba(255,90,0,.08),
              transparent 34%
            ),
            #020408;
        }
.v-bg-video {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: -5;

  opacity: 0.25;

  pointer-events: none;
}

        /* =====================================================
           BACKGROUND
        ===================================================== */

        .v-background-glow {
          position: absolute;

          pointer-events: none;

          border-radius: 50%;

          filter: blur(80px);

          opacity: .5;

          z-index: -4;
        }


        .v-bg-one {
          width: 480px;
          height: 300px;

          left: 50%;
          top: 20%;

          transform: translateX(-50%);

          background:
            rgba(19,49,78,.32);
        }


        .v-bg-two {
          width: 500px;
          height: 220px;

          left: 50%;
          bottom: -50px;

          transform: translateX(-50%);

          background:
            rgba(255,91,0,.16);

          filter: blur(90px);
        }


        .v-grid {
          position: absolute;

          inset: 0;

          opacity: .11;

          z-index: -3;

          background-image:
            linear-gradient(
              rgba(255,255,255,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.035) 1px,
              transparent 1px
            );

          background-size:
            80px 80px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent 0%,
              rgba(0,0,0,.8) 25%,
              rgba(0,0,0,.6) 65%,
              transparent 100%
            );
        }


        /* =====================================================
           HERO COPY
        ===================================================== */

        .v-hero-copy {
          position: relative;

          z-index: 30;

          width:
            min(
              850px,
              calc(100% - 40px)
            );

          text-align: center;
        }


        .v-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          padding:
            7px 13px;

          border:
            1px solid
            rgba(255,255,255,.09);

          border-radius: 999px;

          background:
            rgba(255,255,255,.025);

          color:
            rgba(255,255,255,.52);

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 2.2px;

          box-shadow:
            inset 0 1px 0
            rgba(255,255,255,.04);
        }


        .v-dot {
          width: 5px;
          height: 5px;

          flex: 0 0 5px;

          border-radius: 50%;

          background: #ff8b00;

          box-shadow:
            0 0 5px #ff8b00,
            0 0 14px rgba(255,125,0,.75);
        }


        .v-hero h1 {
          position: relative;

          margin:
            25px auto 0;

          max-width: 900px;

          font-size:
            clamp(
              58px,
              7.8vw,
              108px
            );

          line-height: .88;

          letter-spacing: -6px;

          font-weight: 850;

          color: #f8f9fa;

          text-shadow:
            0 5px 35px
            rgba(0,0,0,.25);
        }


        .v-hero h1 span {
          color: #ff9d00;

          text-shadow:
            0 0 25px
            rgba(255,120,0,.22),
            0 0 60px
            rgba(255,80,0,.08);
        }


        .v-description {
          position: relative;

          z-index: 20;

          width:
            min(
              540px,
              calc(100% - 30px)
            );

          margin:
            27px auto 0;

          color:
            rgba(255,255,255,.46);

          font-size: 12px;

          line-height: 1.7;

          letter-spacing: .05px;
        }


        /* =====================================================
           HERO ACTIONS
        ===================================================== */

        .v-actions {
          position: relative;

          z-index: 40;

          display: flex;

          justify-content: center;

          align-items: center;

          gap: 11px;

          margin-top: 25px;
        }

.v-primary,
.v-secondary {
  height: 58px;

  padding: 0 35px;

  border-radius: 999px;

  font-size: 15px;

  font-weight: 700;
}

        .v-primary {
          overflow: hidden;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 8px;

          border: 0;

          color: #fff;

          background:
            linear-gradient(
              135deg,
              #ffc226 0%,
              #ff9c00 42%,
              #ff6800 100%
            );

          box-shadow:
            0 8px 25px
            rgba(255,104,0,.18),

            inset 0 1px 0
            rgba(255,255,255,.42);
        }


        .v-primary-glow {
          position: absolute;

          inset: -20px;

          border-radius: inherit;

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.22),
              transparent 55%
            );

          opacity: .35;

          pointer-events: none;
        }


        .v-button-text,
        .v-arrow {
          position: relative;
          z-index: 2;
        }


        .v-arrow {
          font-size: 14px;
        }


        .v-secondary {
          border:
            1px solid
            rgba(255,255,255,.11);

          color:
            rgba(255,255,255,.72);

          background:
            rgba(255,255,255,.035);

          box-shadow:
            inset 0 1px 0
            rgba(255,255,255,.035);
        }


        /* =====================================================
           ORANGE RING
        ===================================================== */

        .v-orb-area {
          position: absolute;

          left: 50%;
          bottom: -400px;

          width: 980px;
          height: 760px;

          transform:
            translateX(-50%);

          z-index: 5;

          pointer-events: none;
        }


        .v-glow {
          position: absolute;

          left: 50%;
          bottom: 150px;

          width: 700px;
          height: 300px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(255,145,0,.42) 0%,
              rgba(255,102,0,.22) 28%,
              rgba(255,75,0,.08) 48%,
              transparent 72%
            );

          filter: blur(48px);

          opacity: .78;
        }


        /* =====================================================
           BACK RING
        ===================================================== */

        .v-arc {
          position: absolute;

          left: 50%;

          border-radius: 50%;

          transform:
            translateX(-50%);

          pointer-events: none;
        }


        .v-arc-back {
          bottom: 105px;

          width: 960px;
          height: 480px;

          border:
            2px solid
            rgba(255,255,255,.08);

          border-bottom-color:
            transparent;

          border-left-color:
            rgba(255,255,255,.035);

          border-right-color:
            rgba(255,255,255,.035);

          filter: blur(1px);

          opacity: .8;
        }


        /* =====================================================
           SOFT ORANGE RING
        ===================================================== */

        .v-arc-soft {
          bottom: 105px;

          width: 890px;
          height: 445px;

          border:
            18px solid
            transparent;

          border-top-color:
            rgba(255,105,0,.10);

          border-left-color:
            rgba(255,105,0,.04);

          border-right-color:
            rgba(255,105,0,.025);

          filter: blur(11px);
        }


        /* =====================================================
           MAIN ENERGY RING
        ===================================================== */

        .v-arc-main {
          bottom: 112px;

          width: 820px;
          height: 410px;

          border:
            7px solid
            transparent;

          border-top-color:
            #ff9700;

          border-left-color:
            rgba(255,112,0,.48);

          border-right-color:
            rgba(255,92,0,.20);

          box-shadow:
            0 -2px 10px
            rgba(255,193,65,.95),

            0 -7px 22px
            rgba(255,130,0,.95),

            0 -20px 55px
            rgba(255,92,0,.58),

            0 -40px 110px
            rgba(255,66,0,.25);

          filter:
            drop-shadow(
              0 0 7px
              rgba(255,165,40,.95)
            );
        }


        /* Bright thin highlight */

        .v-arc-highlight {
          position: absolute;

          left: 50%;
          bottom: 114px;

          width: 810px;
          height: 405px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          border:
            1px solid
            transparent;

          border-top-color:
            rgba(255,231,175,.95);

          border-left-color:
            rgba(255,185,75,.25);

          border-right-color:
            rgba(255,140,0,.08);

          filter:
            drop-shadow(
              0 0 5px
              rgba(255,200,90,.9)
            );
        }


        /* =====================================================
           ORB
        ===================================================== */

        .v-orb {
          position: absolute;

          left: 50%;
          bottom: 120px;

          width: 132px;
          height: 132px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          z-index: 10;

          background:
            radial-gradient(
              circle at 34% 25%,
              #40576c 0%,
              #1b2a38 20%,
              #0b121a 48%,
              #030609 76%
            );

          border:
            1px solid
            rgba(255,255,255,.15);

          box-shadow:
            0 0 25px
            rgba(255,111,0,.20),

            0 0 70px
            rgba(255,86,0,.13),

            inset 0 0 30px
            rgba(255,255,255,.045),

            inset 0 -25px 40px
            rgba(0,0,0,.9);
        }


        .v-orb::before {
          content: "";

          position: absolute;

          inset: 8px;

          border-radius: 50%;

          border:
            1px solid
            rgba(255,138,0,.14);

          box-shadow:
            inset 0 0 25px
            rgba(255,100,0,.08);
        }


        .v-orb-reflection {
          position: absolute;

          left: 25px;
          top: 18px;

          width: 32px;
          height: 18px;

          border-radius: 50%;

          background:
            rgba(255,255,255,.08);

          filter: blur(7px);

          transform: rotate(-25deg);
        }


        .v-orb-inner {
          position: relative;

          z-index: 2;

          width: 100%;
          height: 100%;

          display: grid;
          place-items: center;

          color: #ff9b00;

          font-size: 40px;

          font-weight: 850;

          text-shadow:
            0 0 20px
            rgba(255,135,0,.60);
        }


        /* =====================================================
           ORB LABEL
        ===================================================== */

        .v-orb-label {
          position: absolute;

          left: 50%;
          bottom: 82px;

          transform:
            translateX(-50%);

          z-index: 20;

          white-space: nowrap;

          color:
            rgba(255,255,255,.38);

          font-size: 7px;

          letter-spacing: 2px;

          font-weight: 700;
        }


        .v-orb-label span {
          display: inline-block;

          width: 5px;
          height: 5px;

          margin-right: 7px;

          border-radius: 50%;

          background: #58ff9a;

          box-shadow:
            0 0 8px
            #58ff9a;
        }


        /* =====================================================
           FLOATING DASHBOARD WRAPPER
        ===================================================== */

        .v-dashboard-wrap {
          position: absolute;

          left: 50%;
          bottom: 42px;

          width:
            min(
              920px,
              calc(100% - 50px)
            );

          transform:
            translateX(-50%);

          z-index: 25;

          opacity: .96;
        }


        .v-dashboard-glow {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 75%;
          height: 130%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background:
            rgba(255,88,0,.10);

          filter: blur(45px);

          opacity: .65;

          z-index: -1;
        }


        /* =====================================================
           FLOATING DASHBOARD
        ===================================================== */

        .v-dashboard {
          position: relative;

          width: 100%;

          display: grid;

          grid-template-columns:
            1.3fr
            1fr
            1fr
            1fr
            auto;

          gap: 1px;

          overflow: hidden;

          border:
            1px solid
            rgba(255,255,255,.11);

          border-radius: 15px;

          background:
            rgba(255,255,255,.055);

          box-shadow:
            0 20px 70px
            rgba(0,0,0,.55),

            0 0 45px
            rgba(255,90,0,.07),

            inset 0 1px 0
            rgba(255,255,255,.06);

          backdrop-filter:
            blur(22px);

          -webkit-backdrop-filter:
            blur(22px);

          opacity: .94;
        }


        .v-dashboard > div {
          min-height: 68px;

          padding:
            16px 18px;

          background:
            linear-gradient(
              145deg,
              rgba(10,16,23,.90),
              rgba(4,8,13,.82)
            );
        }


        .v-dashboard-logo {
          display: flex;
          align-items: center;
          gap: 9px;

          color: #fff;

          font-size: 10px;
          font-weight: 800;

          letter-spacing: .7px;
        }


        .v-mini-mark {
          display: grid;
          place-items: center;

          width: 20px;
          height: 20px;

          border-radius: 6px;

          color: #ffad22;

          border:
            1px solid
            rgba(255,150,0,.35);

          background:
            rgba(255,105,0,.08);

          box-shadow:
            0 0 12px
            rgba(255,100,0,.12);

          font-size: 10px;
        }


        .v-dashboard-item {
          position: relative;
        }


        .v-dashboard-item small {
          display: block;

          color:
            rgba(255,255,255,.32);

          font-size: 7px;

          letter-spacing: 1.4px;

          font-weight: 700;
        }


        .v-dashboard-item strong {
          display: block;

          margin-top: 5px;

          color: #f5f6f7;

          font-size: 17px;

          letter-spacing: -.5px;
        }


        .v-dashboard-item .green {
          color: #64ff9c;
        }


        .v-item-change {
          position: absolute;

          right: 17px;
          bottom: 17px;

          color:
            rgba(255,255,255,.30);

          font-size: 7px;

          letter-spacing: 1px;
        }


        .v-item-change.orange {
          color: #ff9a00;
        }


        .v-item-change.green {
          color: #58ff9a;
        }


        .v-dashboard-status {
          display: flex;

          align-items: center;
          gap: 7px;

          color:
            rgba(255,255,255,.45);

          font-size: 7px;

          letter-spacing: 1.1px;

          white-space: nowrap;
        }


        .v-dashboard-status span {
          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #58ff9a;

          box-shadow:
            0 0 9px
            #58ff9a;
        }


        /* =====================================================
           SECOND SECTION
        ===================================================== */

        .v-dashboard-section {
          position: relative;

          min-height: 100vh;

          padding:
            150px 20px;

          text-align: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(255,94,0,.065),
              transparent 30%
            ),
            #020408;
        }


        .v-section-label {
          color: #ff9900;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 3px;
        }


        .v-dashboard-section h2 {
          margin:
            22px auto 0;

          font-size:
            clamp(
              48px,
              7vw,
              88px
            );

          line-height: .94;

          letter-spacing: -5px;

          font-weight: 850;
        }


        .v-dashboard-section h2 span {
          color:
            rgba(255,255,255,.28);
        }


        .v-section-description {
          max-width: 480px;

          margin:
            25px auto 60px;

          color:
            rgba(255,255,255,.40);

          font-size: 12px;

          line-height: 1.7;
        }


        /* =====================================================
           MAIN DASHBOARD
        ===================================================== */

        .v-main-dashboard {
          position: relative;

          width:
            min(
              1000px,
              100%
            );

          margin: auto;

          padding: 25px;

          border:
            1px solid
            rgba(255,255,255,.09);

          border-radius: 20px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.055),
              rgba(255,255,255,.012)
            );

          box-shadow:
            0 40px 100px
            rgba(0,0,0,.55),

            0 0 80px
            rgba(255,90,0,.04),

            inset 0 1px 0
            rgba(255,255,255,.04);

          text-align: left;

          backdrop-filter:
            blur(20px);

          -webkit-backdrop-filter:
            blur(20px);
        }


        .v-dashboard-top {
          display: flex;

          justify-content: space-between;
          align-items: center;

          padding-bottom: 24px;

          border-bottom:
            1px solid
            rgba(255,255,255,.06);
        }


        .v-dashboard-top small,
        .v-score-card small {
          color:
            rgba(255,255,255,.32);

          font-size: 8px;

          letter-spacing: 2px;

          font-weight: 700;
        }


        .v-dashboard-top h3 {
          margin:
            7px 0 0;

          font-size: 20px;
        }


        .v-live {
          display: flex;

          align-items: center;

          gap: 7px;

          color:
            rgba(255,255,255,.44);

          font-size: 8px;

          letter-spacing: 1px;
        }


        .v-live span {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #58ff9a;

          box-shadow:
            0 0 12px
            #58ff9a;
        }


        /* =====================================================
           SCORE CARDS
        ===================================================== */

        .v-score-row {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 12px;

          margin-top: 15px;
        }


        .v-score-card {
          padding: 22px;

          border:
            1px solid
            rgba(255,255,255,.065);

          border-radius: 12px;

          background:
            rgba(255,255,255,.022);

          box-shadow:
            inset 0 1px 0
            rgba(255,255,255,.025);
        }


        .v-score-card strong {
          display: block;

          margin-top: 12px;

          font-size: 34px;
        }


        .v-score-card strong span {
          color: #ff9200;

          font-size: 18px;
        }


        .v-score-card p {
          margin:
            8px 0 0;

          color: #58ff9a;

          font-size: 9px;
        }


        .v-progress {
          height: 4px;

          margin-top: 15px;

          overflow: hidden;

          border-radius: 20px;

          background:
            rgba(255,255,255,.07);
        }


        .v-progress div {
          width: 92%;
          height: 100%;

          background:
            linear-gradient(
              90deg,
              #ffb000,
              #ff7200
            );

          box-shadow:
            0 0 14px
            rgba(255,120,0,.65);
        }


        /* =====================================================
           CHART
        ===================================================== */

        .v-chart {
          position: relative;

          height: 270px;

          margin-top: 15px;

          padding: 20px;

          overflow: hidden;

          border:
            1px solid
            rgba(255,255,255,.065);

          border-radius: 12px;

          background:
            rgba(0,0,0,.18);
        }


        .v-chart-header {
          position: relative;

          z-index: 3;

          display: flex;

          justify-content: space-between;

          color:
            rgba(255,255,255,.32);

          font-size: 8px;

          letter-spacing: 1.5px;
        }


        .v-chart-lines {
          position: absolute;

          inset:
            45px 20px 20px;

          display: flex;

          flex-direction: column;

          justify-content: space-between;
        }


        .v-chart-lines div {
          width: 100%;
          height: 1px;

          background:
            rgba(255,255,255,.05);
        }


        .v-chart svg {
          position: absolute;

          left: 20px;
          right: 20px;
          bottom: 20px;

          width:
            calc(100% - 40px);

          height: 190px;
        }


        .v-chart path {
          fill: none;

          stroke: #ff8500;

          stroke-width: 3;

          filter:
            drop-shadow(
              0 0 8px
              rgba(255,120,0,.65)
            );
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .v-links {
            display: none;
          }


          .v-nav {
            width:
              calc(100% - 40px);
          }


          .v-orb-area {
            width: 850px;
          }


          .v-arc-back {
            width: 820px;
            height: 420px;
          }


          .v-arc-soft {
            width: 760px;
            height: 385px;
          }


          .v-arc-main {
            width: 700px;
            height: 350px;
          }


          .v-arc-highlight {
            width: 690px;
            height: 345px;
          }


          .v-dashboard {
            grid-template-columns:
              1.2fr 1fr 1fr;
          }


          .v-dashboard-status {
            display: none;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .v-nav {
            width:
              calc(100% - 30px);

            height: 70px;
          }


          .v-nav-button {
            padding:
              9px 14px;

            font-size: 9px;
          }


          .v-hero {
            min-height: 760px;
            height: 760px;

            padding-top: 115px;
          }


          .v-hero-copy {
            width:
              calc(100% - 30px);
          }


          .v-eyebrow {
            font-size: 7px;
            letter-spacing: 1.6px;
          }


          .v-hero h1 {
            font-size: 53px;

            letter-spacing: -3.8px;

            line-height: .91;
          }


          .v-description {
            width:
              calc(100% - 15px);

            font-size: 11px;

            margin-top: 22px;
          }


          .v-actions {
            flex-direction: column;

            gap: 9px;

            margin-top: 22px;
          }


          .v-primary,
          .v-secondary {
            width: 185px;
          }


          .v-orb-area {
            width: 700px;
            height: 550px;

            bottom: -320px;
          }


          .v-glow {
            width: 500px;
            height: 230px;
          }


          .v-arc-back {
            width: 690px;
            height: 350px;

            bottom: 80px;
          }


          .v-arc-soft {
            width: 630px;
            height: 320px;

            bottom: 80px;
          }


          .v-arc-main {
            width: 560px;
            height: 285px;

            bottom: 85px;

            border-width: 6px;
          }


          .v-arc-highlight {
            width: 550px;
            height: 280px;

            bottom: 86px;
          }


          .v-orb {
            width: 105px;
            height: 105px;

            bottom: 88px;
          }


          .v-orb-inner {
            font-size: 32px;
          }


          .v-orb-label {
            bottom: 55px;

            font-size: 5.5px;

            letter-spacing: 1.3px;
          }


          .v-dashboard-wrap {
            width:
              calc(100% - 25px);

            bottom: 25px;
          }


          .v-dashboard {
            grid-template-columns:
              1fr 1fr;

            border-radius: 12px;
          }


          .v-dashboard > div {
            min-height: 58px;

            padding:
              12px;
          }


          .v-dashboard-logo {
            display: none;
          }


          .v-dashboard-status {
            display: none;
          }


          .v-dashboard-item small {
            font-size: 6px;
          }


          .v-dashboard-item strong {
            font-size: 14px;
          }


          .v-item-change {
            display: none;
          }


          .v-dashboard-section {
            padding:
              100px 15px;
          }


          .v-dashboard-section h2 {
            font-size: 49px;

            letter-spacing: -3px;
          }


          .v-section-description {
            margin-bottom: 40px;
          }


          .v-main-dashboard {
            padding: 15px;

            border-radius: 16px;
          }


          .v-dashboard-top {
            align-items:
              flex-start;
          }


          .v-live {
            display: none;
          }


          .v-score-row {
            grid-template-columns: 1fr;
          }


          .v-score-card {
            padding: 18px;
          }


          .v-chart {
            height: 230px;
          }


          .v-chart svg {
            height: 160px;
          }

        }

      `}</style>

    </main>
  );
}