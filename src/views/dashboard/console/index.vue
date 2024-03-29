<template>
    <div class="prose lg:prose-xl md:p-3" style="color:$(var(--n-item-text-color)) !important">
        <h1 id="markdown">Markdown</h1>
        <p>Version 1.0.1 - Tue 14 Dec 2004</p>
        <p>by John Gruber<br><a href="http://daringfireball.net/">http://daringfireball.net/</a></p>
        <h2 id="introduction">Introduction</h2>
        <p>Markdown is a text-to-HTML conversion tool for web writers. Markdown
            allows you to write using an easy-to-read, easy-to-write plain text
            format, then convert it to structurally valid XHTML (or HTML).</p>
        <p>Thus, &quot;Markdown&quot; is two things: a plain text markup syntax, and a
            software tool, written in Perl, that converts the plain text markup
            to HTML.</p>
        <p>Markdown works both as a Movable Type plug-in and as a standalone Perl
            script -- which means it can also be used as a text filter in BBEdit
            (or any other application that supporst filters written in Perl).</p>
        <p>Full documentation of Markdown&#39;s syntax and configuration options is
            available on the web: <a
                href="http://daringfireball.net/projects/markdown/">http://daringfireball.net/projects/markdown/</a>.
            (Note: this readme file is formatted in Markdown.)</p>
        <h2 id="installation-and-requirements">Installation and Requirements</h2>
        <p>Markdown requires Perl 5.6.0 or later. Welcome to the 21st Century.
            Markdown also requires the standard Perl library module <code>Digest::MD5</code>. </p>
        <h3 id="movable-type">Movable Type</h3>
        <p>Markdown works with Movable Type version 2.6 or later (including
            MT 3.0 or later).</p>
        <ol>
            <li>
                <p>Copy the &quot;Markdown.pl&quot; file into your Movable Type &quot;plugins&quot;
                    directory. The &quot;plugins&quot; directory should be in the same directory
                    as &quot;mt.cgi&quot;; if the &quot;plugins&quot; directory doesn&#39;t already exist, use
                    your FTP program to create it. Your installation should look like
                    this:</p>
                <pre><code>(mt home)/plugins/Markdown.pl
</code></pre>
            </li>
            <li>
                <p>Once installed, Markdown will appear as an option in Movable Type&#39;s
                    Text Formatting pop-up menu. This is selectable on a per-post basis.
                    Markdown translates your posts to HTML when you publish; the posts
                    themselves are stored in your MT database in Markdown format.</p>
            </li>
            <li>
                <p>If you also install SmartyPants 1.5 (or later), Markdown will offer
                    a second text formatting option: &quot;Markdown with SmartyPants&quot;. This
                    option is the same as the regular &quot;Markdown&quot; formatter, except that
                    automatically uses SmartyPants to create typographically correct
                    curly quotes, em-dashes, and ellipses. See the SmartyPants web page
                    for more information: <a
                        href="http://daringfireball.net/projects/smartypants/">http://daringfireball.net/projects/smartypants/</a>
                </p>
            </li>
            <li>
                <p>To make Markdown (or &quot;Markdown with SmartyPants&quot;) your default
                    text formatting option for new posts, go to Weblog Config -&gt;
                    Preferences.</p>
            </li>
        </ol>
        <p>Note that by default, Markdown produces XHTML output. To configure
            Markdown to produce HTML 4 output, see &quot;Configuration&quot;, below.</p>
        <h3 id="blosxom">Blosxom</h3>
        <p>Markdown works with Blosxom version 2.x.</p>
        <ol>
            <li>
                <p>Rename the &quot;Markdown.pl&quot; plug-in to &quot;Markdown&quot; (case is
                    important). Movable Type requires plug-ins to have a &quot;.pl&quot;
                    extension; Blosxom forbids it.</p>
            </li>
            <li>
                <p>Copy the &quot;Markdown&quot; plug-in file to your Blosxom plug-ins folder.
                    If you&#39;re not sure where your Blosxom plug-ins folder is, see the
                    Blosxom documentation for information.</p>
            </li>
            <li>
                <p>That&#39;s it. The entries in your weblog will now automatically be
                    processed by Markdown.</p>
            </li>
            <li>
                <p>If you&#39;d like to apply Markdown formatting only to certain posts,
                    rather than all of them, see Jason Clark&#39;s instructions for using
                    Markdown in conjunction with Blosxom&#39;s Meta plugin:</p>
                <p><a
                        href="http://jclark.org/weblog/WebDev/Blosxom/Markdown.html">http://jclark.org/weblog/WebDev/Blosxom/Markdown.html</a>
                </p>
            </li>
        </ol>
        <h3 id="bbedit">BBEdit</h3>
        <p>Markdown works with BBEdit 6.1 or later on Mac OS X. (It also works
            with BBEdit 5.1 or later and MacPerl 5.6.1 on Mac OS 8.6 or later.)</p>
        <ol>
            <li>
                <p>Copy the &quot;Markdown.pl&quot; file to appropriate filters folder in your
                    &quot;BBEdit Support&quot; folder. On Mac OS X, this should be:</p>
                <pre><code>BBEdit Support/Unix Support/Unix Filters/
</code></pre>
                <p>See the BBEdit documentation for more details on the location of
                    these folders.</p>
                <p>You can rename &quot;Markdown.pl&quot; to whatever you wish.</p>
            </li>
            <li>
                <p>That&#39;s it. To use Markdown, select some text in a BBEdit document,
                    then choose Markdown from the Filters sub-menu in the &quot;#!&quot; menu, or
                    the Filters floating palette</p>
            </li>
        </ol>
        <h2 id="configuration">Configuration</h2>
        <p>By default, Markdown produces XHTML output for tags with empty elements.
            E.g.:</p>
        <pre><code>&lt;br /&gt;
</code></pre>
        <p>Markdown can be configured to produce HTML-style tags; e.g.:</p>
        <pre><code>&lt;br&gt;
</code></pre>
        <h3 id="movable-type-1">Movable Type</h3>
        <p>You need to use a special <code>MTMarkdownOptions</code> container tag in each
            Movable Type template where you want HTML 4-style output:</p>
        <pre><code>&lt;MTMarkdownOptions output=&#39;html4&#39;&gt;
    ... put your entry content here ...
&lt;/MTMarkdownOptions&gt;
</code></pre>
        <p>The easiest way to use MTMarkdownOptions is probably to put the
            opening tag right after your <code>&lt;body&gt;</code> tag, and the closing tag right
            before <code>&lt;/body&gt;</code>.</p>
        <p>To suppress Markdown processing in a particular template, i.e. to
            publish the raw Markdown-formatted text without translation into
            (X)HTML, set the <code>output</code> attribute to &#39;raw&#39;:</p>
        <pre><code>&lt;MTMarkdownOptions output=&#39;raw&#39;&gt;
    ... put your entry content here ...
&lt;/MTMarkdownOptions&gt;
</code></pre>
        <h3 id="command-line">Command-Line</h3>
        <p>Use the <code>--html4tags</code> command-line switch to produce HTML output from a
            Unix-style command line. E.g.:</p>
        <pre><code>% perl Markdown.pl --html4tags foo.text
</code></pre>
        <p>Type <code>perldoc Markdown.pl</code>, or read the POD documentation within the
            Markdown.pl source code for more information.</p>
        <h2 id="bugs">Bugs</h2>
        <p>To file bug reports or feature requests please send email to:
            <a
                href="mailto:&#109;&#x61;&#114;&#x6b;&#100;&#111;&#119;&#110;&#x40;&#x64;&#97;&#x72;&#105;&#110;&#103;&#x66;&#105;&#114;&#x65;&#x62;&#97;&#x6c;&#x6c;&#46;&#x6e;&#x65;&#x74;">&#109;&#x61;&#114;&#x6b;&#100;&#111;&#119;&#110;&#x40;&#x64;&#97;&#x72;&#105;&#110;&#103;&#x66;&#105;&#114;&#x65;&#x62;&#97;&#x6c;&#x6c;&#46;&#x6e;&#x65;&#x74;</a>.
        </p>
        <h2 id="version-history">Version History</h2>
        <p>1.0.1 (14 Dec 2004):</p>
        <ul>
            <li>Changed the syntax rules for code blocks and spans. Previously,
                backslash escapes for special Markdown characters were processed
                everywhere other than within inline HTML tags. Now, the contents
                of code blocks and spans are no longer processed for backslash
                escapes. This means that code blocks and spans are now treated
                literally, with no special rules to worry about regarding
                backslashes.</li>
        </ul>
        <pre><code>**NOTE**: This changes the syntax from all previous versions of
Markdown. Code blocks and spans involving backslash characters
will now generate different output than before.
</code></pre>
        <ul>
            <li>Tweaked the rules for link definitions so that they must occur
                within three spaces of the left margin. Thus if you indent a link
                definition by four spaces or a tab, it will now be a code block.

                [a]: /url/ &quot;Indented 3 spaces, this is a link def&quot;

                [b]: /url/ &quot;Indented 4 spaces, this is a code block&quot;</li>
        </ul>
        <pre><code>**IMPORTANT**: This may affect existing Markdown content if it
contains link definitions indented by 4 or more spaces.
</code></pre>
        <ul>
            <li>
                <p>Added <code>&gt;</code>, <code>+</code>, and <code>-</code> to the list of backslash-escapable
                    characters. These should have been done when these characters
                    were added as unordered list item markers.</p>
            </li>
            <li>
                <p>Trailing spaces and tabs following HTML comments and <code>&lt;hr/&gt;</code> tags
                    are now ignored.</p>
            </li>
            <li>
                <p>Inline links using <code>&lt;</code> and <code>&gt;</code> URL delimiters weren&#39;t working:</p>
                <p> like <a href="http://example.com/">this</a></p>
            </li>
            <li>
                <p>Added a bit of tolerance for trailing spaces and tabs after
                    Markdown hr&#39;s.</p>
            </li>
            <li>
                <p>Fixed bug where auto-links were being processed within code spans:</p>
                <p> like this: <code>&lt;http://example.com/&gt;</code></p>
            </li>
            <li>
                <p>Sort-of fixed a bug where lines in the middle of hard-wrapped
                    paragraphs, which lines look like the start of a list item,
                    would accidentally trigger the creation of a list. E.g. a
                    paragraph that looked like this:
                    I recommend upgrading to version</p>
                <ol start="8">
                    <li>Oops, now this line is treated
                        as a sub-list.</li>
                </ol>
            </li>
        </ul>
        <pre><code>This is fixed for top-level lists, but it can still happen for
sub-lists. E.g., the following list item will not be parsed
properly:

    +    I recommend upgrading to version
        8. Oops, now this line is treated
        as a sub-list.

Given Markdown&#39;s list-creation rules, I&#39;m not sure this can
be fixed.
</code></pre>
        <ul>
            <li>
                <p>Standalone HTML comments are now handled; previously, they&#39;d get
                    wrapped in a spurious <code>&lt;p&gt;</code> tag.</p>
            </li>
            <li>
                <p>Fix for horizontal rules preceded by 2 or 3 spaces.</p>
            </li>
            <li>
                <p><code>&lt;hr&gt;</code> HTML tags in must occur within three spaces of left
                    margin. (With 4 spaces or a tab, they should be code blocks, but
                    weren&#39;t before this fix.)</p>
            </li>
            <li>
                <p>Capitalized &quot;With&quot; in &quot;Markdown With SmartyPants&quot; for
                    consistency with the same string label in SmartyPants.pl.
                    (This fix is specific to the MT plug-in interface.)</p>
            </li>
            <li>
                <p>Auto-linked email address can now optionally contain
                    a &#39;mailto:&#39; protocol. I.e. these are equivalent:
                    <a href="mailto:user@example.com">mailto:user@example.com</a>
                    <a
                        href="mailto:&#117;&#115;&#101;&#x72;&#64;&#x65;&#120;&#97;&#109;&#112;&#108;&#101;&#x2e;&#99;&#x6f;&#109;">&#117;&#115;&#101;&#x72;&#64;&#x65;&#120;&#97;&#109;&#112;&#108;&#101;&#x2e;&#99;&#x6f;&#109;</a>
                </p>
            </li>
            <li>
                <p>Fixed annoying bug where nested lists would wind up with
                    spurious (and invalid) <code>&lt;p&gt;</code> tags.</p>
            </li>
            <li>
                <p>You can now write empty links:</p>
                <p> <a href="">like this</a></p>
            </li>
        </ul>
        <pre><code>and they&#39;ll be turned into anchor tags with empty href attributes.
This should have worked before, but didn&#39;t.
</code></pre>
        <ul>
            <li>
                <p><code>***this***</code> and <code>___this___</code> are now turned into</p>
                <p> <strong><em>this</em></strong></p>
            </li>
        </ul>
        <pre><code>Instead of

    &lt;strong&gt;&lt;em&gt;this&lt;/strong&gt;&lt;/em&gt;

which isn&#39;t valid. (Thanks to Michel Fortin for the fix.)
</code></pre>
        <ul>
            <li>
                <p>Added a new substitution in <code>_EncodeCode()</code>: s/$/&#036;/g; This
                    is only for the benefit of Blosxom users, because Blosxom
                    (sometimes?) interpolates Perl scalars in your article bodies.</p>
            </li>
            <li>
                <p>Fixed problem for links defined with urls that include parens, e.g.:</p>
            </li>
        </ul>
        <pre><code>&quot;Chomsky&quot; was being erroneously treated as the URL&#39;s title.
</code></pre>
        <ul>
            <li>At some point during 1.0&#39;s beta cycle, I changed every sub&#39;s
                argument fetching from this idiom:
                my $text = shift;</li>
        </ul>
        <pre><code>to:

    my $text = shift || return &#39;&#39;;

The idea was to keep Markdown from doing any work in a sub
if the input was empty. This introduced a bug, though:
if the input to any function was the single-character string
&quot;0&quot;, it would also evaluate as false and return immediately.
How silly. Now fixed.
</code></pre>
        <h2 id="donations">Donations</h2>
        <p>Donations to support Markdown&#39;s development are happily accepted. See:
            <a href="http://daringfireball.net/projects/markdown/">http://daringfireball.net/projects/markdown/</a> for
            details.
        </p>
        <h2 id="copyright-and-license">Copyright and License</h2>
        <p>Copyright (c) 2003-2004 John Gruber<br><a
                href="http://daringfireball.net/">http://daringfireball.net/</a><br>All rights reserved.</p>
        <p>Redistribution and use in source and binary forms, with or without
            modification, are permitted provided that the following conditions are
            met:</p>
        <ul>
            <li>
                <p>Redistributions of source code must retain the above copyright notice,
                    this list of conditions and the following disclaimer.</p>
            </li>
            <li>
                <p>Redistributions in binary form must reproduce the above copyright
                    notice, this list of conditions and the following disclaimer in the
                    documentation and/or other materials provided with the distribution.</p>
            </li>
            <li>
                <p>Neither the name &quot;Markdown&quot; nor the names of its contributors may
                    be used to endorse or promote products derived from this software
                    without specific prior written permission.</p>
            </li>
        </ul>
        <p>This software is provided by the copyright holders and contributors &quot;as
            is&quot; and any express or implied warranties, including, but not limited
            to, the implied warranties of merchantability and fitness for a
            particular purpose are disclaimed. In no event shall the copyright owner
            or contributors be liable for any direct, indirect, incidental, special,
            exemplary, or consequential damages (including, but not limited to,
            procurement of substitute goods or services; loss of use, data, or
            profits; or business interruption) however caused and on any theory of
            liability, whether in contract, strict liability, or tort (including
            negligence or otherwise) arising in any way out of the use of this
            software, even if advised of the possibility of such damage.</p>

    </div>
</template>

<script setup lang="ts">

</script>