import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../../config/site";

const platformStyles = {
  LeetCode: {
    accent: "#FFB84D",
    glow: "rgba(255,184,77,0.3)",
    Icon: LeetCodeIcon,
  },
  GeeksforGeeks: {
    accent: "#43D99A",
    glow: "rgba(67,217,154,0.28)",
    Icon: GeeksForGeeksIcon,
  },
  "Coding Ninjas": {
    accent: "#B79AFF",
    glow: "rgba(183,154,255,0.3)",
    Icon: CodingNinjasIcon,
  },
};

function LeetCodeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"
      />
    </svg>
  );
}

function GeeksForGeeksIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116-.016 3.79 3.79 0 0 1-2.135-2.078 3.571 3.571 0 0 1-.13-.353h7.418a4.26 4.26 0 0 1-.368 1.008zm-11.99-.654a3.793 3.793 0 0 1-2.134 2.078 4.51 4.51 0 0 1-3.117.016 3.7 3.7 0 0 1-1.104-.695 2.652 2.652 0 0 1-.564-.745 4.221 4.221 0 0 1-.368-1.006H9.59c-.038.12-.08.238-.13.352zm14.501-1.758a3.849 3.849 0 0 0-.082-.475l-9.634-.008a3.932 3.932 0 0 1 1.143-2.348c.363-.35.79-.625 1.26-.809a3.97 3.97 0 0 1 4.484.957l1.521-1.49a5.7 5.7 0 0 0-1.922-1.357 6.283 6.283 0 0 0-2.544-.49 6.35 6.35 0 0 0-2.405.457 6.007 6.007 0 0 0-1.963 1.276 6.142 6.142 0 0 0-1.325 1.94 5.862 5.862 0 0 0-.466 1.864h-.063a5.857 5.857 0 0 0-.467-1.865 6.13 6.13 0 0 0-1.325-1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0-4.949.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484-.958c.47.184.898.46 1.26.81.368.36.66.792.859 1.268.146.344.242.708.285 1.08l-9.635.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 .345 2.127 4.927 4.927 0 0 0 1.08 1.783c.528.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504.457c.824.005 1.64-.15 2.404-.457a5.986 5.986 0 0 0 1.964-1.277 6.116 6.116 0 0 0 1.686-3.076h.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405.457 6.45 6.45 0 0 0 2.502-.457 5.42 5.42 0 0 0 1.882-1.293 4.928 4.928 0 0 0 1.08-1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0-.039-.554z"
      />
    </svg>
  );
}

function CodingNinjasIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M23.198 0c-.499.264-1.209.675-1.79.984a542.82 542.82 0 000 6.242c.995-.526 1.761-.834 1.79-2.066V0zM8.743.181C7.298.144 5.613.65 4.47 1.414c-1.17.8-1.987 1.869-2.572 3.179A16.787 16.787 0 00.9 8.87c-.15 1.483-.128 3.079.025 4.677.27 1.855.601 3.724 1.616 5.456 1.57 2.62 4.313 4.109 7.262 4.19 3.41.246 7.233.53 11.411.807.022-2.005.01-5.418 0-6.25-3.206-.21-7.398-.524-11.047-.782-.443-.043-.896-.056-1.324-.172-1.086-.295-1.806-.802-2.374-1.757-.643-1.107-.875-2.832-.797-4.294.11-1.27.287-2.41 1.244-3.44.669-.56 1.307-.758 2.161-.84 5.17.345 7.609.53 12.137.858.032-1.133.01-3.46 0-6.229C16.561.752 12.776.474 8.743.181zm-.281 9.7c.174.675.338 1.305.729 1.903.537.832 1.375 1.127 2.388.877.76-.196 1.581-.645 2.35-1.282zm12.974 1.04-5.447.689c.799.739 1.552 1.368 2.548 1.703.988.319 1.78.01 2.308-.777.209-.329.56-1.148.591-1.614zm.842 6.461c-.388.01-.665.198-.87.355.002 1.798 0 4.127 0 6.223.586-.297 1.135-.644 1.793-.998-.005-1.454.002-3.137-.005-4.707a.904.904 0 00-.917-.873z"
      />
    </svg>
  );
}

function SkillDockItem({ profile, index, reduceMotion }) {
  const style = platformStyles[profile.name] ?? platformStyles.LeetCode;
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 180, damping: 18, mass: 0.25 });
  const y = useSpring(pointerY, { stiffness: 180, damping: 18, mass: 0.25 });
  const [ripple, setRipple] = useState(0);
  const timer = useRef(null);
  const Icon = style.Icon;

  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
    },
    [],
  );

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 6);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 6);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  const triggerRipple = () => {
    if (reduceMotion) return;
    setRipple((value) => value + 1);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setRipple(0), 700);
  };

  return (
    <motion.a
      href={profile.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${profile.name} profile for ${profile.username}`}
      className="group flex min-w-0 flex-col items-center text-center outline-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      onPointerDown={triggerRipple}
      style={{ x, y, "--dock-accent": style.accent, "--dock-glow": style.glow }}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
    >
      <motion.span
        className="relative grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-full border border-white/20 bg-[#071725]/90 text-[color:var(--dock-accent)] shadow-[inset_0_1px_0_rgba(255,255,255,.18),inset_0_-10px_24px_rgba(0,0,0,.25),0_0_24px_var(--dock-glow)] backdrop-blur-xl transition-[border-color,box-shadow] duration-300 group-hover:border-[color:var(--dock-accent)] group-focus-visible:border-[color:var(--dock-accent)] group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-[color:var(--dock-accent)]"
        whileHover={reduceMotion ? undefined : { y: -8, scale: 1.05 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        animate={
          reduceMotion
            ? undefined
            : {
                boxShadow: [
                  `inset 0 1px 0 rgba(255,255,255,.18), inset 0 -10px 24px rgba(0,0,0,.25), 0 0 18px ${style.glow}`,
                  `inset 0 1px 0 rgba(255,255,255,.22), inset 0 -10px 24px rgba(0,0,0,.25), 0 0 27px ${style.glow}`,
                  `inset 0 1px 0 rgba(255,255,255,.18), inset 0 -10px 24px rgba(0,0,0,.25), 0 0 18px ${style.glow}`,
                ],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : { duration: 6 + index, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <span className="pointer-events-none absolute inset-[3px] rounded-full border border-white/[0.08]" />
        <motion.span
          className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent"
          animate={reduceMotion ? undefined : { x: ["0%", "310%"] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 7, delay: index * 0.7, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }
          }
          aria-hidden="true"
        />
        <span className="relative z-10 h-8 w-8 drop-shadow-[0_0_10px_var(--dock-glow)]">
          <Icon />
        </span>
        {ripple > 0 && (
          <motion.span
            key={ripple}
            className="pointer-events-none absolute inset-2 rounded-full border border-[color:var(--dock-accent)]"
            initial={{ scale: 0.35, opacity: 0.65 }}
            animate={{ scale: 1.7, opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            aria-hidden="true"
          />
        )}
      </motion.span>

      <span className="mt-4 flex min-h-10 items-center justify-center px-1 text-xs font-semibold leading-5 text-white sm:text-base">
        {profile.name}
      </span>
      <span className="mt-0.5 min-h-5 text-xs leading-5 text-slate-400">
        UniverseOfYograj
      </span>
    </motion.a>
  );
}

export default function CodingUniverse() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="coding"
      className="coding-universe relative isolate overflow-hidden bg-[#04111B] py-24 sm:py-32"
    >
      <div
        className="coding-nebula pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-200">
            05 / CODING UNIVERSE
          </p>
          <h2 className="text-3xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Competitive Programming
            <span className="block text-cyan-200">Profiles</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-300/75 sm:text-base">
            Explore my engineering journey through real coding platforms.
          </p>
        </motion.header>

        <div className="mx-auto grid max-w-[680px] grid-cols-1 items-start gap-7 min-[360px]:grid-cols-3 min-[360px]:gap-3 sm:gap-10">
          {siteConfig.codingProfiles.map((profile, index) => (
            <SkillDockItem
              key={profile.name}
              profile={profile}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
