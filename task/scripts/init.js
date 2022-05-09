let lang = "ru";
let shift = false;
let caps = false;

document.body.innerHTML = `<main>
<div class="virtual-keyboard">
  <div class="virtual-keyboard__wrapper">
    <div class="virtual-keyboard__input">
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        class="virtual-keyboard__input--textarea"
      ></textarea>
    </div>
    <div class="virtual-keyboard__keyboard">
      <div class="virtual-keyboard__container">
        <div class="virtual-keyboard__keys">
          <div class="virtual-keyboard__keyboard--first">
            <button class="virtual-keyboard__keyboard--btn esc" id="esc">
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">ESC</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 1"
              id="1"
              data-text-unshift-en="1"
              data-text-shift-en="!"
              data-text-unshift-ru="1"
              data-text-shift-ru="!"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">!</div>
                <div class="virtual-keyboard__bottom">1</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 2"
              id="2"
              data-text-unshift-en="2"
              data-text-shift-en="@"
              data-text-unshift-ru="2"
              data-text-shift-ru="&#34;"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">@</div>
                <div class="virtual-keyboard__bottom">2</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 3"
              id="3"
              data-text-unshift-en="3"
              data-text-shift-en="#"
              data-text-unshift-ru="3"
              data-text-shift-ru="№"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">#</div>
                <div class="virtual-keyboard__bottom">3</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 4"
              id="4"
              data-text-unshift-en="4"
              data-text-shift-en="$"
              data-text-unshift-ru="4"
              data-text-shift-ru=";"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">$</div>
                <div class="virtual-keyboard__bottom">4</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 5"
              id="5"
              data-text-unshift-en="5"
              data-text-shift-en="%"
              data-text-unshift-ru="5"
              data-text-shift-ru="%"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">%</div>
                <div class="virtual-keyboard__bottom">5</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 6"
              id="6"
              data-text-unshift-en="6"
              data-text-shift-en="^"
              data-text-unshift-ru="6"
              data-text-shift-ru=":"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">^</div>
                <div class="virtual-keyboard__bottom">6</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 7"
              id="7"
              data-text-unshift-en="7"
              data-text-shift-en="&"
              data-text-unshift-ru="7"
              data-text-shift-ru="?"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top"><p>&</p></div>
                <div class="virtual-keyboard__bottom"><p>7</p></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 8"
              id="8"
              data-text-unshift-en="8"
              data-text-shift-en="*"
              data-text-unshift-ru="8"
              data-text-shift-ru="*"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">*</div>
                <div class="virtual-keyboard__bottom">8</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 9"
              id="9"
              data-text-unshift-en="9"
              data-text-shift-en="("
              data-text-unshift-ru="9"
              data-text-shift-ru="("
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">(</div>
                <div class="virtual-keyboard__bottom">9</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn 0"
              id="0"
              data-text-unshift-en="0"
              data-text-shift-en=")"
              data-text-unshift-ru="0"
              data-text-shift-ru=")"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">)</div>
                <div class="virtual-keyboard__bottom">0</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn minus"
              id="minus"
              data-text-unshift-en="-"
              data-text-shift-en="_"
              data-text-unshift-ru="-"
              data-text-shift-ru="_"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">-</div>
                <div class="virtual-keyboard__bottom">_</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn plus"
              id="equal"
              data-text-unshift-en="="
              data-text-shift-en="+"
              data-text-unshift-ru="="
              data-text-shift-ru="+"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">+</div>
                <div class="virtual-keyboard__bottom">=</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn backspace"
              id="backspace"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">backspace</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn tilda"
              id="backquote"
              data-text-unshift-en="&#96;"
              data-text-shift-en="~"
              data-text-unshift-ru="ё"
              data-text-shift-ru="Ё"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">~</div>
                <div class="virtual-keyboard__bottom">&#96;</div>
              </div>
            </button>
          </div>
          <div class="virtual-keyboard__keyboard--second">
            <button class="virtual-keyboard__keyboard--btn tab" id="tab">
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">TAB</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn q"
              id="q"
              data-text-unshift-en="q"
              data-text-shift-en="Q"
              data-text-unshift-ru="й"
              data-text-shift-ru="Й"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">Q</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn w"
              id="w"
              data-text-unshift-en="w"
              data-text-shift-en="W"
              data-text-unshift-ru="ц"
              data-text-shift-ru="Ц"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">W</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn e"
              id="e"
              data-text-unshift-en="e"
              data-text-shift-en="E"
              data-text-unshift-ru="у"
              data-text-shift-ru="У"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">E</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn r"
              id="r"
              data-text-unshift-en="r"
              data-text-shift-en="R"
              data-text-unshift-ru="к"
              data-text-shift-ru="К"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">R</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn t"
              id="t"
              data-text-unshift-en="t"
              data-text-shift-en="T"
              data-text-unshift-ru="е"
              data-text-shift-ru="Е"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">T</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn y"
              id="y"
              data-text-unshift-en="y"
              data-text-shift-en="Y"
              data-text-unshift-ru="н"
              data-text-shift-ru="Н"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">Y</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn u"
              id="u"
              data-text-unshift-en="u"
              data-text-shift-en="U"
              data-text-unshift-ru="г"
              data-text-shift-ru="Г"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">U</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn i"
              id="i"
              data-text-unshift-en="i"
              data-text-shift-en="I"
              data-text-unshift-ru="ш"
              data-text-shift-ru="Ш"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">I</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn o"
              id="o"
              data-text-unshift-en="o"
              data-text-shift-en="O"
              data-text-unshift-ru="щ"
              data-text-shift-ru="Щ"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">O</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn p"
              id="p"
              data-text-unshift-en="p"
              data-text-shift-en="P"
              data-text-unshift-ru="з"
              data-text-shift-ru="З"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">P</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn ["
              id="bracketleft"
              data-text-unshift-en="["
              data-text-shift-en="{"
              data-text-unshift-ru="х"
              data-text-shift-ru="Х"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">{</div>
                <div class="virtual-keyboard__bottom">[</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn ]"
              id="bracketright"
              data-text-unshift-en="]"
              data-text-shift-en="}"
              data-text-unshift-ru="ъ"
              data-text-shift-ru="Ъ"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">}</div>
                <div class="virtual-keyboard__bottom">]</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn backslash"
              id="backslash"
              data-text-unshift-en="&#92;"
              data-text-shift-en="|"
              data-text-unshift-ru="&#92;"
              data-text-shift-ru="/"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">|</div>
                <div class="virtual-keyboard__bottom">&#92;</div>
              </div>
            </button>
            <button class="virtual-keyboard__keyboard--btn del" id="delete">
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">DEL</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
          </div>
          <div class="virtual-keyboard__keyboard--third">
            <button
              class="virtual-keyboard__keyboard--btn caps"
              id="capslock"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">CAPS LOCK</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn a"
              id="a"
              data-text-unshift-en="a"
              data-text-shift-en="A"
              data-text-unshift-ru="ф"
              data-text-shift-ru="Ф"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">A</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn s"
              id="s"
              data-text-unshift-en="s"
              data-text-shift-en="S"
              data-text-unshift-ru="ы"
              data-text-shift-ru="Ы"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">S</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn d"
              id="d"
              data-text-unshift-en="d"
              data-text-shift-en="D"
              data-text-unshift-ru="в"
              data-text-shift-ru="В"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">D</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn f"
              id="f"
              data-text-unshift-en="f"
              data-text-shift-en="F"
              data-text-unshift-ru="а"
              data-text-shift-ru="А"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">F</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn g"
              id="g"
              data-text-unshift-en="g"
              data-text-shift-en="G"
              data-text-unshift-ru="п"
              data-text-shift-ru="П"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">G</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn h"
              id="h"
              data-text-unshift-en="h"
              data-text-shift-en="H"
              data-text-unshift-ru="р"
              data-text-shift-ru="Р"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">H</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn j"
              id="j"
              data-text-unshift-en="j"
              data-text-shift-en="J"
              data-text-unshift-ru="о"
              data-text-shift-ru="О"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">J</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn k"
              id="k"
              data-text-unshift-en="k"
              data-text-shift-en="K"
              data-text-unshift-ru="л"
              data-text-shift-ru="Л"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">K</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn l"
              id="l"
              data-text-unshift-en="l"
              data-text-shift-en="L"
              data-text-unshift-ru="д"
              data-text-shift-ru="Д"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">L</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn ;"
              id="semicolon"
              data-text-unshift-en=";"
              data-text-shift-en=":"
              data-text-unshift-ru="ж"
              data-text-shift-ru="Ж"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">:</div>
                <div class="virtual-keyboard__bottom">;</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn '"
              id="quote"              "
              data-text-unshift-en="&#39;"
              data-text-shift-en="&#34;"
              data-text-unshift-ru="э"
              data-text-shift-ru="Э"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">"</div>
                <div class="virtual-keyboard__bottom">'</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn enter"
              id="enter"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">ENTER</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn home"
              id="home"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">HOME</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
          </div>
          <div class="virtual-keyboard__keyboard--fourth">
            <button
              class="virtual-keyboard__keyboard--btn shift-left"
              id="shiftleft"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">SHIFT</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn z"
              id="z"
              data-text-unshift-en="z"
              data-text-shift-en="Z"
              data-text-unshift-ru="я"
              data-text-shift-ru="Я"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">Z</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn x"
              id="x"
              data-text-unshift-en="x"
              data-text-shift-en="X"
              data-text-unshift-ru="ч"
              data-text-shift-ru="Ч"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">X</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn c"
              id="c"
              data-text-unshift-en="c"
              data-text-shift-en="C"
              data-text-unshift-ru="с"
              data-text-shift-ru="С"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">C</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn v"
              id="v"
              data-text-unshift-en="v"
              data-text-shift-en="V"
              data-text-unshift-ru="м"
              data-text-shift-ru="М"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">V</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn b"
              id="b"
              data-text-unshift-en="b"
              data-text-shift-en="B"
              data-text-unshift-ru="и"
              data-text-shift-ru="И"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">B</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn n"
              id="n"
              data-text-unshift-en="n"
              data-text-shift-en="N"
              data-text-unshift-ru="т"
              data-text-shift-ru="Т"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">N</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn m"
              id="m"
              data-text-unshift-en="m"
              data-text-shift-en="M"
              data-text-unshift-ru="ь"
              data-text-shift-ru="Ь"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">M</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn ,"
              id="comma"
              data-text-unshift-en=","
              data-text-shift-en="<"
              data-text-unshift-ru="б"
              data-text-shift-ru="Б"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top"><</div>
                <div class="virtual-keyboard__bottom">,</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn ."
              id="period"
              data-text-unshift-en="."
              data-text-shift-en=">"
              data-text-unshift-ru="ю"
              data-text-shift-ru="Ю"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">></div>
                <div class="virtual-keyboard__bottom">.</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn /"
              id="slash"
              data-text-unshift-en="/"
              data-text-shift-en="?"
              data-text-unshift-ru="."
              data-text-shift-ru=","
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">?</div>
                <div class="virtual-keyboard__bottom">/</div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn shift-right"
              id="shiftright"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">SHIFT</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn arrow-up"
              id="arrowup"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">
                  <img src="assets/Polygon 1.svg" alt="Arrow" />
                </div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button class="virtual-keyboard__keyboard--btn end" id="end">
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">END</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
          </div>
          <div class="virtual-keyboard__keyboard--fifth">
            <button
              class="virtual-keyboard__keyboard--btn ctrl-left"
              id="controlleft"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">CTRL</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn win-left"
              id="metaleft"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">WIN</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn alt-left"
              id="altleft"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">ALT</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn space"
              id="space"
              data-text-unshift-en=" "
              data-text-shift-en=" "
              data-text-unshift-ru=" "
              data-text-shift-ru=" "
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top"></div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn ctrl-right"
              id="controlright"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">CTRL</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn win-right"
              id="contextmenu"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">WIN</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn alt-right"
              id="altright"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">ALT</div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn arrow-left"
              id="arrowleft"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">
                  <img src="assets/Polygon 1.svg" alt="Arrow" />
                </div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn arrow-down"
              id="arrowdown"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">
                  <img src="assets/Polygon 1.svg" alt="Arrow" />
                </div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
            <button
              class="virtual-keyboard__keyboard--btn arrow-right"
              id="arrowright"
            >
              <div class="virtual-keyboard__keyboard--btn--inner">
                <div class="virtual-keyboard__top">
                  <img src="assets/Polygon 1.svg" alt="Arrow" />
                </div>
                <div class="virtual-keyboard__bottom"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>`;

let listOfButtons = document.querySelectorAll(
  ".virtual-keyboard__keyboard--btn"
);
switchLanguage();

let inputForm = document.querySelector(".virtual-keyboard__input--textarea");

function switchLanguage() {
  listOfButtons.forEach((el) => {
    if (lang == "en") {
      let lowerSymbol = el.getAttribute("data-text-unshift-en");
      let upperSymbol = el.getAttribute("data-text-shift-en");
      if (upperSymbol != null) {
        el.querySelector(".virtual-keyboard__top").innerHTML = upperSymbol;
      }
      if (lowerSymbol != null) {
        el.querySelector(".virtual-keyboard__bottom").innerHTML = lowerSymbol;
      }
    }
    if (lang == "ru") {
      let lowerSymbol = el.getAttribute("data-text-unshift-ru");
      let upperSymbol = el.getAttribute("data-text-shift-ru");
      if (upperSymbol != null) {
        el.querySelector(".virtual-keyboard__top").innerHTML = upperSymbol;
      }
      if (lowerSymbol != null) {
        el.querySelector(".virtual-keyboard__bottom").innerHTML = lowerSymbol;
      }
    }
  });
}
