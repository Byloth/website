export default {
    mounted()
    {
        const pageLoader = document.getElementById("page-loader");

        if (pageLoader !== null)
        {
            setTimeout(() =>
            {
                pageLoader.setAttribute("disabled", "");

                setTimeout(() => pageLoader.remove(), 200);
            }, 200);
        }
    }
};
