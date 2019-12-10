$(function()
{
    $("#code span").typed({

        typeSpeed: 30,
        backSpeed: 0,
        showCursor: true,
        startDelay: 0,
        backDelay: 3000,
        loop: true,
        strings: [

            "",
            "Module MyModule\n\tSub Main()\n\t\tConsole.Write(\"Welcome to Byloth's Website!\")\n\tEnd Sub\nEnd Module\n\n 'Language: Visual Basic .NET\n",
            "",
            "#include &lt;stdio.h&gt;\n\nint main()\n{\n\tprintf(\"Welcome to Byloth's Website!\");\n\n\treturn 0;\n}\n\n// Language: C/C++\n",
            "",
            "using System;\n\nnamespace MyApplication\n{\n\tclass Program\n\t{\n\t\tstatic void Main()\n\t\t{\n\t\t\tConsole.Write(\"Welcome to Byloth's Website!\");\n\t\t}\n\t}\n}\n\n// Language: C# .NET\n",
            "",
            "public static MyApplication\n{\n\tpublic static void main()\n\t{\n\t\tSystem.out.print(\"Welcome to Byloth's Website!\");\n\t}\n}\n\n // Language: Java\n",
            "",
            "&lt;?php\n\techo \"Welcome to Byloth's Website!\";\n?&gt;\n\n &lt;!-- Language: PHP --&gt;\n",
            "",
            "document.write(\"Welcome to Byloth's Website!\");\n\n // Language: JavaScript\n",
            "",
            "print(\"Welcome to Byloth's Website!\")\n\n# Language: Python\n"
        ]
    });
});
