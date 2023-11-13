// Decide which layout to render
// Select background color
// Select images
const layout = {
    fotografia: {
        estudio: [
            "https://lh3.googleusercontent.com/pw/ADCreHciN4EW-WIxZjsXU0SiIxaOr1RLmTxZGFV2cCX6zJX7IHDkFWDLjawJAmNPyBHOGvQfjIed2EUNAfBJ-S8R5Ip3C__FqxYMNfhX-A_UYlYcSWymDLgo9sUcuoc3K0mR7BQYA9Q_4pAIn5fgUWHRckEh=w799-h965-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHd-s1ywjg6Mzh38XIlNUbUwEHk-uphT_8sXVg3EafX7mvsl_6_LHoUtF_mMafjW-xwkz275w8vP56RIyB449f0bAdwmWLUbOoHjdYv9aUQrqPfXNMSF_hbXBS8-mVcOWBQRN3-W_o96MjGO8qj4Jfc3=w616-h879-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHdqs5Q6xlHfN4nL7nLJ1ztgC80HRRhaoMBWrT_Ene-uDrHRSQSKzWFRKnJmAhGLMN-qolRE6HCeqz1BokrZqCSjjlqltcZfEVNLkIxItQvv1V_gLLWzCQMaYheJWDRBDON07MVhm4DeOAR9-zIZtd3f=w616-h879-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHcR0_9KBRk0MrYXzQoQIxAwc40-eZe_LaFybVu94PiJ3bgXRwy2UIwBpGP_SqtmAU_AQw7xBuIetyyPaQkjh4VQgOyYrWyoExX6nEjLeRUT-2mtN0DVCTUCA7IPzTx5IcwQ2dJZcG9gMwAhH3qYmRw7=w616-h879-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHebzTtasI8GvW9wGmsujpAk5jA0yKOjdazOALX3vOuUfKQzPp6y4N1vfjurEN4UV6qIe5LTSvOB-Hq0I2NIGfgOudWaxyvVA1uSkzw_MFhLtAT4CSQuGudnersYaJ9OWO8Sjz8OWo4xayxPtye8qZKw=w616-h879-s-no-gm?authuser=0"
        ],
        galeria: [
            "https://lh3.googleusercontent.com/pw/ADCreHcu3Zgr6QtTMEQtWhQKFF7zYI3IMz2_qA9TLUXnLGmxmyVF74WfliFvDAzhNNtRXnklUPFMg5BRd1e3x3AeWlgWWrHyzTkztoz7lbN6EBSBMqlRboCaq0rZ7dccS25SSziINauDlzSLVH2t_0smhlr9=w599-h924-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHetu48p9C7_BWFWt8p0lP7uYwrpetDxt_REczLTXAXVN8frh2zZuVLjymVuP7mKmuLuWjnxuyGWa7h8hYAXX3ntfa8ZdsN-Yu5VWKfUtO0whjvEEyJlDOlQeSdUiifTxnxDDIe_6Xir20LptSBjFWq-=w1448-h965-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHc0qoJQb7pOU3hmr5IzPtxBXQ0xtQTP5zQ6c_57V2vBmv3fwJ4Pjl_Y9ahjHhsRlw1fMeXPh5qv5GGUHxYcYwckOc0HpZI7pZgyHthHwySFlUHWsvQ0LgKAVzsYQydyU5p26qWjRPzpXl0ccsuBdHYM=w616-h879-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHeNqWWYrLacoY9kwRqmCqAYJIhzzF0uM5C5ETIkkLqZ1KyZEU6gk1JC3Mv4_C-iSJM9mFoH1gczKH46gWV0Zg2ps9yNVtzjQQnJ7XOXnZT8w3cnNg5kDJN_m1isXCtdi9-HJ17wiiSH_bWuRBH_MapL=w1449-h965-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHc4GcGqSkiobgWZyTt65Uj88P_tcf-nNCJgwVm6mo87SMHvw3TWzRkA3RbYkuns7W-OpiOlHbJM91Rmpb5tYfXNRpdl2QmpqLP9KgW8wu56xzgjdEgNQavJ14GKlGc0dxUKgA8aiuK6n7-I34lmBEQp=w1449-h965-s-no-gm?authuser=0"
        ],
        retrato: [
            "https://lh3.googleusercontent.com/pw/ADCreHdE8TYU0nfBR1q3FTv8i9lulOakl-207v8jqPGzvnWKGG7eSgGxmOwIx9Di5rxnjTTaSyxr-dj7sYXf6JCSSqrd3GjQ-eNzTvt7fbsKIQrVHV6qpH06yBrCoZyG5YE8zpx6K0wBz6B7z8_Nknq7OarA=w1480-h958-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHdbabmT8eWeJEGSMFDhCzGu0bhONalyqrb8z0hFSwFmu5Jyz_zIvW-ISxSOzEfATOhX68W_tssIEv3YCR01s8uvz2OCdSvaYsu2ZCVRSmtcyqiGLjA6HRzQNeZelJVjS37a1TeptPmClueErBYoJToY=w667-h924-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHdL4k2P8YY_A69sntqIPw-CX2l5Z9zC8V6KJ_EAdHTJ3eYCBeX5zVUatQkn6nS9xrbgX9Y-i2jkYoL8MP986oPSQj5Q-PwZYmJWoVLDQDbYlB-s2pTUBX4ilCnp5HyrxD6joK-1u1vgY6fYHpJXwQzT=w616-h879-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHdHLAHye4KQkaqUE7JKpCdWsSFtM-Wt68efH3oS6tX6QBdfDUImd7W439O5AvNQsukUYRyenkgBLXjeNwFkophWgfbGBhmjCSNBTVWxGBdV92lSzwidFrt5-CJAzTJE6BrL2L2UXAgpxtbaLk3JEmGf=w616-h879-s-no-gm?authuser=0",
            "https://lh3.googleusercontent.com/pw/ADCreHfnXTYQwU0vratpt9JbnIy0GH5nsPRgsvhOFgVwj8pmn3DijTOCaItJKYhbjiSvZj_4XE8jiHOWrztKcwOoPyAOJllybeAwuF1-yfkVwE8cz7bll_mFyxTJCvFO4pZscBi6xvHse1VUF0j00H5VNlgJ=w616-h879-s-no-gm?authuser=0"
        ],
        background: "linear-gradient(0deg, #98005B 3.41%, rgba(217, 217, 217, 0.00) 105.85%);",
        isCarousel: true
    }
};

//# sourceMappingURL=layout.0ac6750a.js.map
