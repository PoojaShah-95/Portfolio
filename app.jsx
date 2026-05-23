import React from 'react';

const Portfolio = () => {
    // Smooth scroll execution block
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col md:flex-row overflow-x-hidden relative">

            {/* LEFT SIDE: Fixed Profile Section */}
            <aside className="w-full md:w-1/3 md:h-screen md:fixed left-0 bg-slate-900 border-r border-white/10 p-8 md:p-12 flex flex-col justify-between z-20 shadow-2xl">
                <div>
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-400 rounded-2xl mb-8 flex items-center justify-center text-3xl font-bold text-slate-950 shadow-lg shadow-blue-500/20">
                        PS
                    </div>
                    <h1 className="text-4xl font-extrabold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                        Pooja Shah
                    </h1>
                    <p className="text-blue-400 font-semibold uppercase tracking-widest text-xs mb-6">
                        Web Designer & Front-End Developer
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Specialized in translating intricate concepts into fluid, pixel-perfect, and mobile-first responsive web solutions using modern frameworks.
                    </p>

                    {/* Smooth Scroll Navigation Links */}
                    <nav className="space-y-4 hidden md:block">
                        {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="block text-sm text-slate-500 hover:text-blue-400 font-medium transition-colors uppercase tracking-widest">
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Social Connection Links */}
                <div className="flex gap-5 pt-8 border-t border-white/5">
                    <a href="https://www.linkedin.com/in/pooja-shah-1385931b0" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" title="LinkedIn Profile">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://github.com/PoojaShah-95" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-100 transition-colors" title="GitHub Account">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="mailto:Pg10448@gmail.com" className="text-slate-400 hover:text-teal-400 transition-colors" title="Email Me">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
            </aside>

            {/* RIGHT SIDE: Scrollable Content Section */}
            <main className="w-full md:w-2/3 md:ml-[33.3333%] p-6 md:p-16 space-y-28 relative">

                {/* About Me Section */}
                <section id="about" className="space-y-6 scroll-mt-16">
                    <h2 className="text-3xl font-bold flex items-center gap-4 text-white">About Me <span className="h-px bg-white/10 grow"></span></h2>
                    <p className="text-slate-400 leading-relaxed text-base">
                        I am a professional, solution-oriented <strong className="text-blue-400 font-medium">Web Designer and Front-End Developer</strong> with extensive expertise in creating user-centric interfaces. Following a focused career gap to manage family responsibilities, I am actively re-entering the IT workforce equipped with a modernized stack centering on modern JavaScript frameworks.
                    </p>
                    <p className="text-slate-400 leading-relaxed text-base">
                        My philosophy balances strict coding compliance and semantic architecture with an eye for premium aesthetics. I specialize in delivering high-fidelity responsive websites, structured theme conversions, and modular applications.
                    </p>
                </section>

                {/* Featured Work Portfolio Section */}
                <section id="projects" className="space-y-8 scroll-mt-16">
                    <h2 className="text-3xl font-bold flex items-center gap-4 text-white">Featured Work <span className="h-px bg-white/10 grow"></span></h2>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Project 1: Restaurant App */}
                        <div className="group relative bg-slate-900/40 rounded-2xl border border-white/5 p-8 overflow-hidden hover:border-blue-500/30 transition-all shadow-xl backdrop-blur-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">Interactive Restaurant Application</h3>
                                <a href="https://poojashah-95.github.io/Restaurant_Website_2026/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Live Link">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                A clean, custom modern restaurant platform layout. Built featuring modular multi-tier navigation structures, live interactive food filtering matrices, and customized display grids.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['HTML 5', 'Sass/SCSS', 'JavaScript', 'Bootstrap 5'].map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-white/5 rounded text-[10px] uppercase font-bold text-slate-400 tracking-wider border border-white/5">{tag}</span>
                                ))}
                            </div>
                        </div>

                        {/* Project 2: Core Portfolio Platform */}
                        <div className="group relative bg-slate-900/40 rounded-2xl border border-white/5 p-8 overflow-hidden hover:border-teal-500/30 transition-all shadow-xl backdrop-blur-sm">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">Single-Page Split Architecture Portfolio</h3>
                                <a href="#" className="text-slate-400 hover:text-white transition-colors" title="Current Repository">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                This exact production profile system. Implements non-blocking layout separation, high-performance compilation under Vite bundling, and completely custom asset structures.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['React Node Module', 'Vite CLI', 'Tailwind CSS', 'ES6 JavaScript'].map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-white/5 rounded text-[10px] uppercase font-bold text-slate-400 tracking-wider border border-white/5">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dedicated Technical Skills Core */}
                <section id="skills" className="space-y-6 scroll-mt-16">
                    <h2 className="text-3xl font-bold flex items-center gap-4 text-white">Technical Core <span className="h-px bg-white/10 grow"></span></h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {[
                            { name: 'HTML5 & CSS3', level: 'Expert Architecture' },
                            { name: 'React.js Engine', level: 'Modular / Hooks' },
                            { name: 'Tailwind CSS', level: 'Utility Design' },
                            { name: 'Bootstrap 5', level: 'Responsive Grids' },
                            { name: 'Sass / SCSS', level: 'Pre-processing' },
                            { name: 'JavaScript ES6', level: 'Functional Dom' },
                            { name: 'jQuery Core', level: 'Legacy Workflows' },
                            { name: 'Git & Deployment', level: 'Version Tracking' }
                        ].map(skill => (
                            <div key={skill.name} className="p-4 rounded-xl bg-slate-900/30 border border-white/5 flex flex-col justify-between hover:bg-slate-900/60 transition-all">
                                <span className="text-sm font-bold text-slate-200 block mb-1">{skill.name}</span>
                                <span className="text-[10px] uppercase font-semibold text-blue-400 tracking-wider">{skill.level}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience & Professional Journey Timeline */}
                <section id="experience" className="space-y-12 scroll-mt-16">
                    <h2 className="text-3xl font-bold flex items-center gap-4 text-white">Professional Journey <span className="h-px bg-white/10 grow"></span></h2>

                    <div className="space-y-12 border-l-2 border-white/10 ml-4 pl-8 relative">
                        <TimelineItem
                            year="2025 - Present"
                            title="Active Upskilling & Advanced Applications"
                            company="Independent Frontend Engineer — Ahmedabad"
                            desc="Targeted full stack ecosystem optimization. Building production layout frameworks with Vite, React functional architectures, and utility-first Tailwind design parameters to prepare for immediate enterprise project integration."
                        />
                        <TimelineItem
                            year="2022 - 2025"
                            title="Professional Sabbatical"
                            company="Personal Development & Domain Maintenance"
                            desc="Dedicated period managing family milestones and tracking modern UI paradigm evolution. Maintained technical acumen by researching contemporary design layouts like Glassmorphism and responsive CSS refactoring."
                        />
                        <TimelineItem
                            year="Prior Experience"
                            title="Web Designer & Front-End UI Developer"
                            company="Silicon IT Hub Pvt. Ltd. (Full-Time Engagement)"
                            desc="Executed full lifecycle web asset construction. Collaborated heavily with design leads to convert complex multi-layered PSD wireframes into pixel-perfect, W3C compliant, Cross-Browser functional source templates. Managed advanced UI styling via Bootstrap variables, customized layout themes, and optimized tracking components."
                        />
                    </div>
                </section>

                {/* Contact Footer Block */}
                <footer id="contact" className="py-12 border-t border-white/5 text-center md:text-left scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-3 italic tracking-tight text-white">Let's Craft Something Beautiful</h2>
                    <p className="text-slate-500 text-sm mb-2 font-medium">Bachelor of Computer Applications (BCA) — Gujarat University</p>
                    <p className="text-slate-500 text-xs mb-8 tracking-wide">Located in Ahmedabad, Gujarat, India</p>

                    <a href="mailto:Pg10448@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-slate-950 rounded-xl font-extrabold hover:from-blue-500 hover:to-teal-400 transition-all shadow-xl shadow-blue-500/10 hover:scale-[1.02]">
                        Connect via Email
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </footer>

                {/* BACK TO TOP BUTTON*/}
                <div className="sticky bottom-6 left-full w-fit z-50 pr-2">
                    <button
                        onClick={scrollToTop}
                        aria-label="Scroll back to top"
                        className="p-3 bg-slate-900/80 hover:bg-blue-600 border border-white/10 hover:border-blue-400 text-slate-300 hover:text-slate-950 rounded-xl transition-all shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95 group"
                    >
                        <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                    </button>
                </div>

            </main>
        </div>
    );
};

/* Timeline Card Component*/
const TimelineItem = ({ year, title, company, desc }) => (
    <div className="relative group">
        <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-4 border-blue-500 group-hover:border-teal-400 transition-colors"></div>
        <span className="text-xs font-mono font-bold text-slate-500 block mb-1 tracking-widest">{year}</span>
        <h4 className="font-bold text-lg text-slate-100 group-hover:text-blue-400 transition-colors leading-tight">{title}</h4>
        <p className="text-xs font-semibold text-teal-400 mt-1 mb-3 uppercase tracking-wider">{company}</p>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{desc}</p>
    </div>
);

export default Portfolio;