export default defineAppConfig({
  alpine: {
    title: "Torbjørn Holtmon",
    description: "Torbjørn Holtmon´s personal developer blog",
    image: {
      src: "/me.webp",
      alt: "Torbjørn Holtmon, software developer",
      width: 400,
      height: 300,
    },
    header: {
      position: "right", // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: "/logo.svg", // path of the logo
        pathDark: "/logo-dark.svg", // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: "alpine", // alt of the logo
      },
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: "https://www.github.com/nuxt-themes/alpine", // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: "center", // possible value are : 'none' | 'left' | 'center' | 'right'
      message: "Follow me on", // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: "",
      instagram: "",

      linkedin: {
        icon: "uil:linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nuxtlabs",
      },

      github: "TorbjornHoltmon",
    },
    form: {
      successMessage: "Message sent. Thank you!",
    },
  },
});
