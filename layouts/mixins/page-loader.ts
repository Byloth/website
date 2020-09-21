const removeElement = (element: HTMLElement) =>
{
    element.setAttribute("disabled", "");

    setTimeout(() => element.remove(), 200);
};

export default {
    mounted()
    {
        const pageLoader = document.getElementById("page-loader");

        if (pageLoader !== null)
        {
            setTimeout(() => removeElement(pageLoader), 200);
        }
    }
};
