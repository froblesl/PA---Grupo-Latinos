Feature: Members, Posts and Sites

@user30 @web
Scenario Outline: Como usuario quiero crear un nuevo Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Members
  And I wait for 3 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "<name>"
  And I wait for 2 seconds
  And I enter member email "<email>"
  And I wait for 2 seconds
  And I enter member label "<label>"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "<note>"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  Then I click to return of Member list
Examples:
  | name | email | label | note |
  | lora medina  | lm@netvibes.com | news | report |
 # | lora medina  | lmnetvibes.com | news | report |
 # | | | | |
 # | 1 | 1 | 1 | 1 |
 # | uj#a+0b$uHNWaiM?+vTTe!V*yjd]CzLEAxV1;+]=,8-Y_V120gixKg!U=y4YZ0N=6_*t%mr{fBuj3k+-(M7;AP%/:=,uQW17$j8CW/a[PaL(up:u90,);H+wT$(Ai/dm[11gESy&rp%_8GTM:+&7%:97]T6*=ZDF3@v7DKjf#k8M$T]G)0[0.52+CZ0+P5}D  | giacopelo1odnoklassniki.ru | 33f_%73RDBuLv8HB,(w1d-1NmjW#;@zr&S2DdPE%pB8C7ZEwn?=wFJJmeR{=3UB8P0&#K(2L9S%LTvbG&xvW[@%1CbbU4[/C20/WZ_uq.jXx7@V0+ptHJCM7vHBJfjA71iv)9+ypAz5)V+*Zp_4q8PWr!HVqc+-G5}vh@;4e9Y_*/y?hmL24meb_P9?1;@/y | U&r:pJkBn1y6:e}W%dum?+]zCKcHuiWjSc/9gYn1%#BdvdqGugkS/fUT(X(M[)GQb$FS(c38L@{4](tR3=7@(%m-?3CF0Dcc=mE:W$fzuD)6H7tTG@,Q70JJ;,d4:q&m1ta3,xYhZ$%gE=+QaHyC4BFvTpbjP!+LKx:,:_+VdJKS?_b!&MTC6_,RPz+SHAFy{9K7JX]47;!mF&Q&M._U.f%FqgP$tyZ9$x,17aT}nAL2R0R-v+2W)4Ecq!M_cgBy3{TEGA$z_*{#H36KSJhMRf[)A.H3$%,$u#=}eU#/Wu:S:K)Y/1vjkE@dK7MQX3(mGTfMaz:}4qU-ezue/Hf+*,xPR.7%Q}uia/WeV?38PF+TUx=Td6zDV,mdZ8bmP/J!.U#Q)DR9;q*.b=B?Un)uv9-4aBbZ+K7S[d=Z]C-7tSYWPNu;9;2#*?iv}B&w5bZTUM0R8E{697w*Wx3p(guVWbqAJE6[Zq(Cf729Hc::{cpA.mtGfwQg=v5ZC4w4Zv#?vzth].64+R*KWJyZiv9DMj)B)TB(hHL3,+)SE/mt/L&-gUFN67x70T}cAFX24uC_2k[)],XKa6Ea0B#]tW1k0EJ%_gYqxu]xSV+TTW,p}0r*xjX48L;KH328e46]65p/zB?p*;Y,-%6=fk-3ZKW7@E-5M=88Nn5C4trE*zkF+m};bku=7+PT2Gbq_gdb,0PjXv;U3ZnWDaE3)tYF:pW?}:xav]rcBT)_p5A@4PQx!Cc_-{B6pH&+!+!Sqhg+x9(g8!WkN3@wmH2Q$Ec5j92K16}3%+;+00q1Bb+Zqa{h5FkgwX@4bZ?1#Q5n.G#n.fFKCBje.BK$%dTMa6c3(D8RL1kn-e{fJmBa5Szh%7xKu!e8#hg]U)NZQ6BM9D:JmNttF2!NG#KV4$mxQ3y,;ZV*3bh7n_{x-T)}fmvZx}mb)MWQzHn+B!U)/m5/2+}yQnCMgjfCv{@nSJ{ap{RC}x{?3(q!+VXPKMc)9,b%pDE}-wtD[:d}G@6R.YN#%k*D4k06(d]y,;Vd$7T?)Vfqb%,*0-7tFG0{?,Y$)+iwn.e@F@AD(Ja=A9ZS4fAw1-}Cn02qg(b4?F1T58TxgjpQehvB)/qMf{k:_?_)C,dvCPfcX7]7,Xi5A}8W;1:i3?&&L_T]pT9Ak]!2yg%.KB9FYv.Z30r@+Ni[-0(MzKaGUw4VXMw(1A.8F%zaFNeB_4Ac}+-z$h?zDM@0bk7#CrQxM*a!(8KDfj=5{w+i8yM64!qd3i!2q?5VTJg1bQvHmU?&[CDP]Z)vcb@wipSWh[AZJ_1uPbL+)X.]?tGkr%*1L_5NkitadT$CkE{x]6J?TQLfm*c?+WY0i/]0(P9/mRy@GJbm*m,@kH(q%bv7&)5[L]CUfdDS5cQp2&E69}!&gN6uDv76SK3@6+k&#x]:/C}fL;%-B,+T]rRTCwc#,}}z{d#4,6?tqAJjRv[pn?LchMvbJ!(K,VBxij8QTjjDKi8dW{K@%}i?wN1h1P(iTfg]R+L9j-&&GG@BYrNkNMv]48xL%r3:%kFm;2f?D/CUmz-HqL+3?{VSY#TB@c8{{dC7]U?81VBijv-q}d?n7m:r&$9-:bFc$xXU@6Pnc3gN85_2h}TEh&gS;t-d13ff#rn(X*/t@ry[XZ.WmaD*bHvT.Lk!/!Z]5T]B)Sc2k,u]dpPjQ,mz.bMCf?WQ:nhfiJnE1tv3tXnaPw[m)&?!9Mhb}PL.3:55wm*2K}@h%-MNPp;+yVJaA5zq?_;:-}=3VMF/n1B](ZHQYVFqW;(;-+7hvx6zF7n41(U]n%(}c&rgnh(?e7!(K)&nB2bd4V9=AeHfM#p_K/HL]8GkFez;r=+G0:4WW_hP_e8TBE%8-#?G?,nb#rAQAh$6f+mB{D=38G5G.VwMZX-V@1dMU!NETkQR!iYe[wGfZ}yzj@Th.m!z+22t)U9iDnxPS/c2U2yE)RJ{bcAji/Pk1LVgg!{7e&pX:+Qdkduht)@uK;/BM-vEQDW/_ |
 # | select password from user | select * from user | 

@user31 @web
Scenario Outline: Como usuario quiero crear un nuevo Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "<title>"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "<content>"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"
Examples:
  | title | content |
  | Explora Caminos hacia el Éxito Personal y el Bienestar: Estrategias Transformadoras para Alcanzar tus Metas y Potenciar tu Desarrollo Personal| En este post, exploraremos la importancia del equilibrio entre trabajo y vida. Descubre consejos prácticos para gestionar el tiempo, reducir el estrés y cultivar un estilo de vida más saludable. ¡Mejora tu bienestar y optimiza tu rendimiento en todas las áreas de tu vida! |
 # | Descubre las Claves para Transformar tu Vida: Estrategias Prácticas para el Éxito Personal, Bienestar Mental y Lograr tus Metas con Éxito  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies justo, nec euismod nisi volutpat vel. Nulla facilisi. Suspendisse potenti. Integer eu urna et massa tristique iaculis. Morbi eget nisl vitae orci fringilla vehicula. Quisque aliquam felis vel ex dignissim |
 # | | |
 # | 2 | 2 |
 # | Duis auctor eleifend ipsum, nec interdum nulla laoreet vel. Vivamus vel consectetur urna. Quisque ac massa ac lacus tincidunt bibendum ac in elit. Ut a urna eget purus interdum eleifend. Integer eu purus vel dolor facilisis condimentum. Vivamus et lacus vel urna hendrerit tincidunt. Suspendisse euismod, leo sit amet tincidunt euismod, nisi orci tincidunt mauris, et suscipit odio dui vitae justo. Integer vel aliquet libero. Aenean ac leo vel sem consequat lacinia vel a odio. Fusce scelerisque, dui id eleifend gravida, erat justo ullamcorper neque, et suscipit justo felis ac mi.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac lacus sed elit aliquam laoreet. Etiam at tellus justo. Sed nec mi vel justo consequat pharetra. Integer eleifend, ex eu cursus dapibus, orci libero pharetra turpis, ut egestas dui elit vel justo. Praesent bibendum risus et enim bibendum, vel fermentum nisl malesuada. Fusce ac sapien quis lectus pellentesque ullamcorper. Phasellus at sagittis mi. Sed feugiat mauris vel mauris iaculis, at ultricies purus pellentesque. Integer vel augue justo.Suspendisse potenti. Maecenas vel tortor nec dui ultricies convallis. Morbi consequat auctor felis vel tincidunt. Duis fermentum vitae sem vel cursus. Proin bibendum lectus in purus scelerisque facilisis. Vivamus vel dolor vel lacus fermentum eleifend. Fusce fringilla, nunc at imperdiet varius, nulla purus vulputate ex, vel fermentum metus turpis non odio. Sed facilisis dapibus nisl, id pharetra nulla dapibus nec. Sed sit amet semper arcu. Nulla facilisi. Vivamus ut feugiat velit.Sed euismod justo id suscipit varius. Integer vitae ex vel dolor dictum ullamcorper. Proin eget mi eget libero dictum fringilla vel in nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel arcu eget libero consequat vestibulum. Nam ac malesuada urna. Suspendisse potenti. Maecenas eleifend augue vel eros finibus, vitae rhoncus mi dictum. Nullam in purus vel sem blandit tempor. Sed consectetur finibus arcu, et venenatis odio. Integer varius ligula vitae tortor scelerisque, ut luctus dui fermentum. Ut ultrices, augue vel sollicitudin tempus, odio justo feugiat metus, eu semper ligula lacus vel elit. In hac habitasse platea dictumst.Curabitur a mauris in justo rhoncus imperdiet. Integer varius turpis sit amet lacus convallis, vitae scelerisque turpis malesuada. Sed facilisis dui vel diam aliquet, vel varius ex tristique. Fusce ullamcorper nisl non enim ultrices, non fermentum odio vehicula. Aenean aliquet, justo sit amet fringilla ultricies, eros odio tincidunt nunc, vitae venenatis risus ligula ac purus. Fusce vestibulum a ligula vel varius. Etiam hendrerit nunc eu enim suscipit, eu aliquet lectus tristique. Aliquam erat volutpat. Nulla facilisi. Proin gravida augue nec pharetra rhoncus. Donec ac ex vel nulla pellentesque volutpat. Integer accumsan nec tortor eget ultrices. | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies justo, nec euismod nisi volutpat vel. Nulla facilisi. Suspendisse potenti. Integer eu urna et massa tristique iaculis. Morbi eget nisl vitae orci fringilla vehicula. Quisque aliquam felis vel ex dignissim, eu pellentesque lectus luctus. Curabitur efficitur, odio eu aliquet vehicula, purus nisl efficitur libero, a posuere dolor eros et neque. Proin facilisis, lacus vel imperdiet imperdiet, libero tortor auctor metus, nec sollicitudin nisl odio non ligula. Etiam eu vestibulum nisl. Vestibulum eget lectus ac purus euismod congue. Nam efficitur urna ac augue dictum tincidunt. Phasellus dignissim risus ut vel |
 # | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies justo, nec euismod nisi volutpat vel. Nulla facilisi. Suspendisse potenti. Integer eu urna et massa tristique iaculis. Morbi eget nisl vitae orci fringilla vehicula. Quisque aliquam felis vel ex dignissim, eu pellentesque lectus luctus. Curabitur efficitur, odio eu aliquet vehicula, purus ni | U&r:pJkBn1y6:e}W%dum?+]zCKcHuiWjSc/9gYn1%#BdvdqGugkS/fUT(X(M[)GQb$FS(c38L@{4](tR3=7@(%m-?3CF0Dcc=mE:W$fzuD)6H7tTG@,Q70JJ;,d4:q&m1ta3,xYhZ$%gE=+QaHyC4BFvTpbjP!+LKx:,:_+VdJKS?_b!&MTC6_,RPz+SHAFy{9K7JX]47;!mF&Q&M._U.f%FqgP$tyZ9$x,17aT}nAL2R0R-v+2W)4Ecq!M_cgBy3{TEGA$z_*{#H36KSJhMRf[)A.H3$%,$u#=}eU#/Wu:S:K)Y/1vjkE@dK7MQX3(mGTfMaz:}4qU-ezue/Hf+*,xPR.7%Q}uia/WeV?38PF+TUx=Td6zDV,mdZ8bmP/J!.U#Q)DR9;q*.b=B?Un)uv9-4aBbZ+K7S[d=Z]C-7tSYWPNu;9;2#*?iv}B&w5bZTUM0R8E{697w*Wx3p(guVWbqAJE6[Zq(Cf729Hc::{cpA.mtGfwQg=v5ZC4w4Zv#?vzth].64+R*KWJyZiv9DMj)B)TB(hHL3,+)SE/mt/L&-gUFN67x70T}cAFX24uC_2k[)],XKa6Ea0B#]tW1k0EJ%_gYqxu]xSV+TTW,p}0r*xjX48L;KH328e46]65p/zB?p*;Y,-%6=fk-3ZKW7@E-5M=88Nn5C4trE*zkF+m};bku=7+PT2Gbq_gdb,0PjXv;U3ZnWDaE3)tYF:pW?}:xav]rcBT)_p5A@4PQx!Cc_-{B6pH&+!+!Sqhg+x9(g8!WkN3@wmH2Q$Ec5j92K16}3%+;+00q1Bb+Zqa{h5FkgwX@4bZ?1#Q5n.G#n.fFKCBje.BK$%dTMa6c3(D8RL1kn-e{fJmBa5Szh%7xKu!e8#hg]U)NZQ6BM9D:JmNttF2!NG#KV4$mxQ3y,;ZV*3bh7n_{x-T)}fmvZx}mb)MWQzHn+B!U)/m5/2+}yQnCMgjfCv{@nSJ{ap{RC}x{?3(q!+VXPKMc)9,b%pDE}-wtD[:d}G@6R.YN#%k*D4k06(d]y,;Vd$7T?)Vfqb%,*0-7tFG0{?,Y$)+iwn.e@F@AD(Ja=A9ZS4fAw1-}Cn02qg(b4?F1T58TxgjpQehvB)/qMf{k:_?_)C,dvCPfcX7]7,Xi5A}8W;1:i3?&&L_T]pT9Ak]!2yg%.KB9FYv.Z30r@+Ni[-0(MzKaGUw4VXMw(1A.8F%zaFNeB_4Ac}+-z$h?zDM@0bk7#CrQxM*a!(8KDfj=5{w+i8yM64!qd3i!2q?5VTJg1bQvHmU?&[CDP]Z)vcb@wipSWh[AZJ_1uPbL+)X.]?tGkr%*1L_5NkitadT$CkE{x]6J?TQLfm*c?+WY0i/]0(P9/mRy@GJbm*m,@kH(q%bv7&)5[L]CUfdDS5cQp2&E69}!&gN6uDv76SK3@6+k&#x]:/C}fL;%-B,+T]rRTCwc#,}}z{d#4,6?tqAJjRv[pn?LchMvbJ!(K,VBxij8QTjjDKi8dW{K@%}i?wN1h1P(iTfg]R+L9j-&&GG@BYrNkNMv]48xL%r3:%kFm;2f?D/CUmz-HqL+3?{VSY#TB@c8{{dC7]U?81VBijv-q}d?n7m:r&$9-:bFc$xXU@6Pnc3gN85_2h}TEh&gS;t-d13ff#rn(X*/t@ry[XZ.WmaD*bHvT.Lk!/!Z]5T]B)Sc2k,u]dpPjQ,mz.bMCf?WQ:nhfiJnE1tv3tXnaPw[m)&?!9Mhb}PL.3:55wm*2K}@h%-MNPp;+yVJaA5zq?_;:-}=3VMF/n1B](ZHQYVFqW;(;-+7hvx6zF7n41(U]n%(}c&rgnh(?e7!(K)&nB2bd4V9=AeHfM#p_K/HL]8GkFez;r=+G0:4WW_hP_e8TBE%8-#?G?,nb#rAQAh$6f+mB{D=38G5G.VwMZX-V@1dMU!NETkQR!iYe[wGfZ}yzj@Th.m!z+22t)U9iDnxPS/c2U2yE)RJ{bcAji/Pk1LVgg!{7e&pX:+Qdkduht)@uK;/BM-vEQDW/_ |
 # | select password from user | select * from user | 

@user32 @web
Scenario Outline: Como usuario quiero programar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds 
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_4"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "yes"
  And I wait for 5 seconds
  And I click Right now "<VERSION>"
  And I wait for 3 seconds
  And I click Schedule for later "<VERSION>"
  And I wait for 3 seconds
  And I enter the date and time to Schedule for later "<date>" "<time>"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "yes"
Examples:
  | date | time |
  | 2023-12-12 | 12:00 |
 # | 2021-10-10 | 14:00 |
 # | 2023-13-26 | 12:00 |
 # | 2023-11-32 | 20:29 |
 # | 20211126 | 13:00 |
 # | 23-12-2024 | 15:00 |
 # | 20211126-20211126-20211126  | 16:00 |
 # | 2090-07-23 | 17:00 |
 # | 2024-07-24 | -20:00 |
 # | 2024-10-24 | 20:-00 |
 # | 2024-07-25 | 20.5:00 |
 # | 2024-07-26 | 20:0529 |
 # | 2024-07-30 | 2045:29 |
 # | default | nothing |
 # | select password from user | select * from user |

@user33 @web
Scenario Outline: Como usuario quiero crear una Page
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Pages
  And I wait for 3 seconds
  And I click New page
  And I wait for 3 seconds
  And I enter Page title "<title>"
  And I wait for 2 seconds
  And I click Begin writing your page
  And I wait for 3 seconds
  And I enter content page "<content>"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"
Examples:
  | title | content |
  | Estrategias Transformadoras para Alcanzar tus Metas y Potenciar tu Desarrollo Personal| En este post, exploraremos la importancia del equilibrio entre trabajo y vida. Descubre consejos prácticos para gestionar el tiempo, reducir el estrés y cultivar un estilo de vida más saludable. ¡Mejora tu bienestar y optimiza tu rendimiento en todas las áreas de tu vida! |
 # | Descubre las Claves para Transformar tu Vida: Estrategias Prácticas para el Éxito Personal, Bienestar Mental y Lograr tus Metas con Éxito  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies justo, nec euismod nisi volutpat vel. Nulla facilisi. Suspendisse potenti. Integer eu urna et massa tristique iaculis. Morbi eget nisl vitae orci fringilla vehicula. Quisque aliquam felis vel ex dignissim |
 # | | |
 # | 3 | 3 |
 # | 3 | |
 # | Duis auctor eleifend ipsum, nec interdum nulla laoreet vel. Vivamus vel consectetur urna. Quisque ac massa ac lacus tincidunt bibendum ac in elit. Ut a urna eget purus interdum eleifend. Integer eu purus vel dolor facilisis condimentum. Vivamus et lacus vel urna hendrerit tincidunt. Suspendisse euismod, leo sit amet tincidunt euismod, nisi orci tincidunt mauris, et suscipit odio dui vitae justo. Integer vel aliquet libero. Aenean ac leo vel sem consequat lacinia vel a odio. Fusce scelerisque, dui id eleifend gravida, erat justo ullamcorper neque, et suscipit justo felis ac mi.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ac lacus sed elit aliquam laoreet. Etiam at tellus justo. Sed nec mi vel justo consequat pharetra. Integer eleifend, ex eu cursus dapibus, orci libero pharetra turpis, ut egestas dui elit vel justo. Praesent bibendum risus et enim bibendum, vel fermentum nisl malesuada. Fusce ac sapien quis lectus pellentesque ullamcorper. Phasellus at sagittis mi. Sed feugiat mauris vel mauris iaculis, at ultricies purus pellentesque. Integer vel augue justo.Suspendisse potenti. Maecenas vel tortor nec dui ultricies convallis. Morbi consequat auctor felis vel tincidunt. Duis fermentum vitae sem vel cursus. Proin bibendum lectus in purus scelerisque facilisis. Vivamus vel dolor vel lacus fermentum eleifend. Fusce fringilla, nunc at imperdiet varius, nulla purus vulputate ex, vel fermentum metus turpis non odio. Sed facilisis dapibus nisl, id pharetra nulla dapibus nec. Sed sit amet semper arcu. Nulla facilisi. Vivamus ut feugiat velit.Sed euismod justo id suscipit varius. Integer vitae ex vel dolor dictum ullamcorper. Proin eget mi eget libero dictum fringilla vel in nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel arcu eget libero consequat vestibulum. Nam ac malesuada urna. Suspendisse potenti. Maecenas eleifend augue vel eros finibus, vitae rhoncus mi dictum. Nullam in purus vel sem blandit tempor. Sed consectetur finibus arcu, et venenatis odio. Integer varius ligula vitae tortor scelerisque, ut luctus dui fermentum. Ut ultrices, augue vel sollicitudin tempus, odio justo feugiat metus, eu semper ligula lacus vel elit. In hac habitasse platea dictumst.Curabitur a mauris in justo rhoncus imperdiet. Integer varius turpis sit amet lacus convallis, vitae scelerisque turpis malesuada. Sed facilisis dui vel diam aliquet, vel varius ex tristique. Fusce ullamcorper nisl non enim ultrices, non fermentum odio vehicula. Aenean aliquet, justo sit amet fringilla ultricies, eros odio tincidunt nunc, vitae venenatis risus ligula ac purus. Fusce vestibulum a ligula vel varius. Etiam hendrerit nunc eu enim suscipit, eu aliquet lectus tristique. Aliquam erat volutpat. Nulla facilisi. Proin gravida augue nec pharetra rhoncus. Donec ac ex vel nulla pellentesque volutpat. Integer accumsan nec tortor eget ultrices. | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies justo, nec euismod nisi volutpat vel. Nulla facilisi. Suspendisse potenti. Integer eu urna et massa tristique iaculis. Morbi eget nisl vitae orci fringilla vehicula. Quisque aliquam felis vel ex dignissim, eu pellentesque lectus luctus. Curabitur efficitur, odio eu aliquet vehicula, purus nisl efficitur libero, a posuere dolor eros et neque. Proin facilisis, lacus vel imperdiet imperdiet, libero tortor auctor metus, nec sollicitudin nisl odio non ligula. Etiam eu vestibulum nisl. Vestibulum eget lectus ac purus euismod congue. Nam efficitur urna ac augue dictum tincidunt. Phasellus dignissim risus ut vel |
 # | asdfg ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit ultricies justo, nec euismod nisi volutpat vel. Nulla facilisi. Suspendisse potenti. Integer eu urna et massa tristique iaculis. Morbi eget nisl vitae orci fringilla vehicula. Quisque aliquam felis vel ex dignissim, eu pellentesque lectus luctus. Curabitur efficitur, odio eu aliquet vehicula, purus ni | U&r:pJkBn1y6:e}W%dum?+]zCKcHuiWjSc/9gYn1%#BdvdqGugkS/fUT(X(M[)GQb$FS(c38L@{4](tR3=7@(%m-?3CF0Dcc=mE:W$fzuD)6H7tTG@,Q70JJ;,d4:q&m1ta3,xYhZ$%gE=+QaHyC4BFvTpbjP!+LKx:,:_+VdJKS?_b!&MTC6_,RPz+SHAFy{9K7JX]47;!mF&Q&M._U.f%FqgP$tyZ9$x,17aT}nAL2R0R-v+2W)4Ecq!M_cgBy3{TEGA$z_*{#H36KSJhMRf[)A.H3$%,$u#=}eU#/Wu:S:K)Y/1vjkE@dK7MQX3(mGTfMaz:}4qU-ezue/Hf+*,xPR.7%Q}uia/WeV?38PF+TUx=Td6zDV,mdZ8bmP/J!.U#Q)DR9;q*.b=B?Un)uv9-4aBbZ+K7S[d=Z]C-7tSYWPNu;9;2#*?iv}B&w5bZTUM0R8E{697w*Wx3p(guVWbqAJE6[Zq(Cf729Hc::{cpA.mtGfwQg=v5ZC4w4Zv#?vzth].64+R*KWJyZiv9DMj)B)TB(hHL3,+)SE/mt/L&-gUFN67x70T}cAFX24uC_2k[)],XKa6Ea0B#]tW1k0EJ%_gYqxu]xSV+TTW,p}0r*xjX48L;KH328e46]65p/zB?p*;Y,-%6=fk-3ZKW7@E-5M=88Nn5C4trE*zkF+m};bku=7+PT2Gbq_gdb,0PjXv;U3ZnWDaE3)tYF:pW?}:xav]rcBT)_p5A@4PQx!Cc_-{B6pH&+!+!Sqhg+x9(g8!WkN3@wmH2Q$Ec5j92K16}3%+;+00q1Bb+Zqa{h5FkgwX@4bZ?1#Q5n.G#n.fFKCBje.BK$%dTMa6c3(D8RL1kn-e{fJmBa5Szh%7xKu!e8#hg]U)NZQ6BM9D:JmNttF2!NG#KV4$mxQ3y,;ZV*3bh7n_{x-T)}fmvZx}mb)MWQzHn+B!U)/m5/2+}yQnCMgjfCv{@nSJ{ap{RC}x{?3(q!+VXPKMc)9,b%pDE}-wtD[:d}G@6R.YN#%k*D4k06(d]y,;Vd$7T?)Vfqb%,*0-7tFG0{?,Y$)+iwn.e@F@AD(Ja=A9ZS4fAw1-}Cn02qg(b4?F1T58TxgjpQehvB)/qMf{k:_?_)C,dvCPfcX7]7,Xi5A}8W;1:i3?&&L_T]pT9Ak]!2yg%.KB9FYv.Z30r@+Ni[-0(MzKaGUw4VXMw(1A.8F%zaFNeB_4Ac}+-z$h?zDM@0bk7#CrQxM*a!(8KDfj=5{w+i8yM64!qd3i!2q?5VTJg1bQvHmU?&[CDP]Z)vcb@wipSWh[AZJ_1uPbL+)X.]?tGkr%*1L_5NkitadT$CkE{x]6J?TQLfm*c?+WY0i/]0(P9/mRy@GJbm*m,@kH(q%bv7&)5[L]CUfdDS5cQp2&E69}!&gN6uDv76SK3@6+k&#x]:/C}fL;%-B,+T]rRTCwc#,}}z{d#4,6?tqAJjRv[pn?LchMvbJ!(K,VBxij8QTjjDKi8dW{K@%}i?wN1h1P(iTfg]R+L9j-&&GG@BYrNkNMv]48xL%r3:%kFm;2f?D/CUmz-HqL+3?{VSY#TB@c8{{dC7]U?81VBijv-q}d?n7m:r&$9-:bFc$xXU@6Pnc3gN85_2h}TEh&gS;t-d13ff#rn(X*/t@ry[XZ.WmaD*bHvT.Lk!/!Z]5T]B)Sc2k,u]dpPjQ,mz.bMCf?WQ:nhfiJnE1tv3tXnaPw[m)&?!9Mhb}PL.3:55wm*2K}@h%-MNPp;+yVJaA5zq?_;:-}=3VMF/n1B](ZHQYVFqW;(;-+7hvx6zF7n41(U]n%(}c&rgnh(?e7!(K)&nB2bd4V9=AeHfM#p_K/HL]8GkFez;r=+G0:4WW_hP_e8TBE%8-#?G?,nb#rAQAh$6f+mB{D=38G5G.VwMZX-V@1dMU!NETkQR!iYe[wGfZ}yzj@Th.m!z+22t)U9iDnxPS/c2U2yE)RJ{bcAji/Pk1LVgg!{7e&pX:+Qdkduht)@uK;/BM-vEQDW/_ |
 # | select password from user | select * from user |

@user34 @web
Scenario Outline: Como usuario quiero crear un nuevo Tag
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Tags
  And I wait for 3 seconds
  And I click New tag
  And I wait for 3 seconds
  And I enter tag name "<name>"
  And I wait for 2 seconds
  And I enter tag slug "<slug>"
  And I wait for 2 seconds
  And I enter tag description "<description>"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  Then I click to return of Tag list
Examples:
  | name | slug | description |
  | ExploraTuMundo | descubre-los-secretos-de-la-naturaleza | Descubre nuevas perspectivas y aventuras mientras exploras tu mundo. Desde consejos de viaje hasta historias inspiradoras |
 # | &.gU[WPc6y%K$h+)(dS*d57v2ej*$]?8E$_r96wmCj*L52eQ:.@m;x2/}fvy!.5h=j2WGQJZKmfSWbN.*&D}&r%0b$ADny)yXV}j{_S7!;nni}[G(%..!Jh{aaPpV5w_.7u,wX8(=zu&EFYdHXi?;E=t7C5im;9iy,KZ_HMp(_*LEeJymw0q7eQcVk3.=_Z4 | aventuras-inolvidables-descubre-mundos-historias-consejos-exploracion | n&*gh8vVv:jS[,t*7*va:j{p[k%M2tLgmA=H9u0wufdKM[G{75yJ@#K_0zeT:Q5w2w{W#ctB.B,(/vF5,gEX3WR+u2-VdtdL:yg0?h&4gj5wpm_.]v*[)60NujRVnXM6.KB]:ff9=cc,5]n4NR+hxu!UKbc4YH(iMJ{=aLHF6=!0:hf4qZWxD.)(G7+#qM0=_QV0PuuX!m,j@c,{;BWB*Wr#ABE.qvd%U3aBmji&$Ed(%Rk*]af6qq*?.v-k{iWhznTndym:uHu_;ViJwpkJn+_v}dmDng=:ipPp1?V*eFhpPZaa6y4$MG?_Md{nYKibnf=Q+%7:B+!#!FKHjL8PTm%qS*N+Tvi(Bd*1XFk7d#;wH%mb;hKRaDer-(*,KD1V9ZpK%:MJ]b+Gg@ZMeS=mUg+J.3qEfwNVK;?P1N#HJ$6Kx7=:Tn=&xWtiDHmM*h258TNeVyAxi1N;HzEm&iFv]=u/hPkc23Q;.[N:vq]tjZL.PUVyw%&P! |
 # | }@#N3qmyn*.jKf&Y7A_{[%Zw0h20r!/zE6FSX3LS9jB5%NJQ(AfZKzj[8t]S9)NqZc#xK8;TeDPwr(}m.Y*U2xE58{}b9PB)Wx9C%ai]NbiHzV(}G/thEbhY%4VD8Y93S7XK]=e=Tw%Z7Haa.4{qBC7*R?z1E0Cf@TTCVwgdFH}xzAQA8AFpKL6YRg3jn:y | aventuras-inolvidables-descubre-mundos-historias-consejos-exploracio | n&*gh8vVv:jS[,t*7*va:j{p[k%M2tLgmA=H9u0wufdKM[G{75yJ@#K_0zeT:Q5w2w{W#ctB.B,(/vF5,gEX3WR+u2-VdtdL:yg0?h&4gj5wpm_.]v*[)60NujRVnXM6.KB]:ff9=cc,5]n4NR+hxu!UKbc4YH(iMJ{=aLHF6=!0:hf4qZWxD.)(G7+#qM0=_QV0PuuX!m,j@c,{;BWB*Wr#ABE.qvd%U3aBmji&$Ed(%Rk*]af6qq*?.v-k{iWhznTndym:uHu_;ViJwpkJn+_v}dmDng=:ipPp1?V*eFhpPZaa6y4$MG?_Md{nYKibnf=Q+%7:B+!#!FKHjL8PTm%qS*N+Tvi(Bd*1XFk7d#;wH%mb;hKRaDer-(*,KD1V9ZpK%:MJ]b+Gg@ZMeS=mUg+J.3qEfwNVK;?P1N#HJ$6Kx7=:Tn=&xWtiDHmM*h258TNeVyAxi1N;HzEm&iFv]=u/hPkc23Q;.[N:vq]tjZL.PUVyw%&P |
 # | | | |
 # | | Inolvidables | descubre-naturaleza |
 # | select password from user | select * from user | select * from user |

@user35 @web
Scenario Outline: Como usuario quiero usar un Tag creado previamente en nuevo Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Tags
  And I wait for 3 seconds
  And I click New tag
  And I wait for 3 seconds
  And I enter tag name "$string_22"
  And I wait for 2 seconds
  And I enter tag slug "$string_23"
  And I wait for 2 seconds
  And I enter tag description "$string_24"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  And I click to return of Tag list
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_23"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_26"
  And I wait for 2 seconds
  And I click Settings of post
  And I wait for 3 seconds
  And I enter tag post "<tag>"
  And I wait for 2 seconds
  And I click add tag post
  And I wait for 3 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"
Examples:
  | tag |
  # | Estrategias Transformadoras para Alcanzar tus Metas y Potenciar tu Desarrollo Personal |
  | uj#a+0b$uHNWaiM?+vTTe!V*yjd]CzLEAxV1;+]=,8-Y_V120gixKg!U=y4YZ0N=6_*t%mr{fBuj3k+-(M7;AP%/:=,uQW17$j8CW/a[PaL(up:u90,);H+wT$(Ai/dm[11gESy&rp%_8GTM:+&7%:97]T6*=ZDF3@v7DKjf#k8M$T]G)0[0.52+CZ0+P5}D |
  | select password from user | select * from user |

@user1 @web
Scenario: Como usuario quiero crear un nuevo Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Members
  And I wait for 3 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_1"
  And I wait for 2 seconds
  And I enter member email "$email_1"
  And I wait for 2 seconds
  And I enter member label "$string_1"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_2"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  Then I click to return of Member list

@user9 @web
Scenario: Como usuario quiero editar un Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Members
  And I wait for 3 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_2"
  And I wait for 2 seconds
  And I enter member email "$email_3"
  And I wait for 2 seconds
  And I enter member label "$string_2"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_3"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  And I click to return of Member list
  And I wait for 3 seconds
  And I click on Member exist
  And I wait for 3 seconds
  And I enter member name "$name_3"
  And I wait for 2 seconds
  And I enter member email "$email_4"
  And I wait for 2 seconds
  And I enter member label "$string_3"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_4"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  Then I click to return of Member list

@user2 @web
Scenario: Como usuario quiero eliminar un Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Members
  And I wait for 3 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_2"
  And I wait for 2 seconds
  And I enter member email "$email_2"
  And I wait for 2 seconds
  And I enter member label "$string_2"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_2"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  And I click to return of Member list
  And I wait for 3 seconds
  And I click on the first member of the list
  And I wait for 3 seconds
  And I click on Member actions
  And I wait for 3 seconds
  And I click on Delete member option
  And I wait for 3 seconds
  Then I confirm Delete component

@user8 @web
Scenario: Como usuario quiero conocer la cantidad de Members suscritos
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I see the dashboard metrics "<VERSION>"
  And I wait for 2 seconds
  Then The number of members is displayed as "23"

@user3 @web
Scenario: Como usuario quiero crear un nuevo Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_4"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"

@user4 @web
Scenario: Como usuario quiero editar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_6"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  And I click Publish component "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Editor post "<VERSION>"
  And I wait for 3 seconds
  And I click to return of Post list
  And I wait for 3 seconds
  And I click on Edit post
  And I wait for 3 seconds
  And I enter Post title "$string_7"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_8"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"

@user23 @web
Scenario: Como usuario quiero eliminar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_8"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_9"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  And I click Publish component "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Editor post "<VERSION>"
  And I wait for 3 seconds
  And I click to return of Post list
  And I wait for 3 seconds
  And I click on Edit post
  And I wait for 3 seconds
  And I click Settings of post
  And I wait for 3 seconds
  And I click Delete post
  And I wait for 3 seconds
  Then I confirm Delete post

@user12 @web
Scenario: Como usuario quiero eliminar un Post antes de publicarse
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_8"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_9"
  And I wait for 2 seconds
  And I click Settings of post
  And I wait for 3 seconds
  And I click Delete post
  And I wait for 3 seconds
  Then I confirm Delete post

@user6 @web
Scenario: Como usuario quiero crear un borrador de Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_10"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_11"
  And I wait for 3 seconds
  Then I click to return of Post list

@user7 @web
Scenario: Como usuario quiero listar los Posts
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  Then I click on Posts

@user10 @web
Scenario: Como usuario quiero ver los Posts publicados
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click Type component options
  And I wait for 3 seconds
  Then I click Published component
  And I wait for 3 seconds

@user13 @web
Scenario: Como usuario quiero programar un Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_3"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_4"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "yes"
  And I wait for 5 seconds
  And I click Right now "<VERSION>"
  And I wait for 3 seconds
  And I click Schedule for later "<VERSION>"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "yes"

@user14 @web
Scenario: Como usuario quiero crear una Page
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Pages
  And I wait for 3 seconds
  And I click New page
  And I wait for 3 seconds
  And I enter Page title "$string_13"
  And I wait for 2 seconds
  And I click Begin writing your page
  And I wait for 3 seconds
  And I enter content page "$string_16"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"

@user13 @web
Scenario: Como usuario quiero despublicar una Page
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Pages
  And I wait for 3 seconds
  And I click New page
  And I wait for 3 seconds
  And I enter Page title "$string_17"
  And I wait for 2 seconds
  And I click Begin writing your page
  And I wait for 3 seconds
  And I enter content page "$string_18"
  And I wait for 2 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  And I click Publish component "<VERSION>" "no"
  And I click to return of Page list "<VERSION>"
  And I wait for 3 seconds
  And I click Type component options
  And I wait for 3 seconds
  And I click Published component
  And I wait for 3 seconds
  And I click on last element Published
  And I wait for 3 seconds
  And I click Unpublish "<VERSION>"
  And I wait for 3 seconds
  Then I click Unpublish and revert to private draft "<VERSION>"

@user16 @web
Scenario: Como usuario quiero crear un nuevo Tag
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Tags
  And I wait for 3 seconds
  And I click New tag
  And I wait for 3 seconds
  And I enter tag name "$string_19"
  And I wait for 2 seconds
  And I enter tag slug "$string_20"
  And I wait for 2 seconds
  And I enter tag description "$string_21"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  Then I click to return of Tag list

@user17 @web
Scenario: Como usuario quiero usar un Tag creado previamente en nuevo Post
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Tags
  And I wait for 3 seconds
  And I click New tag
  And I wait for 3 seconds
  And I enter tag name "$string_22"
  And I wait for 2 seconds
  And I enter tag slug "$string_23"
  And I wait for 2 seconds
  And I enter tag description "$string_24"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  And I click to return of Tag list
  And I wait for 3 seconds
  And I click on Posts
  And I wait for 3 seconds
  And I click on New post
  And I wait for 3 seconds
  And I enter Post title "$string_23"
  And I wait for 2 seconds
  And I click on Begin writing your post
  And I wait for 3 seconds
  And I enter content post "$string_26"
  And I wait for 2 seconds
  And I click Settings of post
  And I wait for 3 seconds
  And I enter tag post "$string_27"
  And I wait for 2 seconds
  And I click add tag post
  And I wait for 3 seconds
  And I click on Publish "<VERSION>" "no"
  And I wait for 3 seconds
  And I click Continue, final review "<VERSION>"
  And I wait for 3 seconds
  Then I click Publish component "<VERSION>" "no"

@user18 @web
Scenario: Como usuario quiero eliminar un Tag
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click Tags
  And I wait for 3 seconds
  And I click New tag
  And I wait for 3 seconds
  And I enter tag name "$string_28"
  And I wait for 2 seconds
  And I enter tag slug "$string_29"
  And I wait for 2 seconds
  And I enter tag description "$string_30"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  And I click to return of Tag list
  And I wait for 3 seconds
  And I click on the first tag of the list
  And I wait for 3 seconds
  And I click Delete tag
  And I wait for 3 seconds
  Then I confirm Delete component

@user19 @web
Scenario: Como usuario quiero buscar el contenido de un Member
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Members
  And I wait for 3 seconds
  And I click on New member
  And I wait for 2 seconds
  And I enter member name "$name_19"
  And I wait for 2 seconds
  And I enter member email "$email_19"
  And I wait for 2 seconds
  And I enter member label "$string_19"
  And I wait for 2 seconds
  And I click add new member label
  And I wait for 2 seconds
  And I enter member note "$string_31"
  And I wait for 2 seconds
  And I click Save component
  And I wait for 3 seconds
  And I click to return of Member list
  And I navigate to page "<URL_GHOST>"
  And I wait for 3 seconds
  Then I click search Member

@user20 @web
Scenario: Como usuario quiero agregar un nuevo Site
  Given I navigate to page "<URL_GHOST_ADMIN>"
  When I enter email "<EMAIL>"
  And I wait for 2 seconds
  And I enter password "<PASSWORD>"
  And I wait for 2 seconds
  And I click next
  And I wait for 3 seconds
  And I click on Explore
  Then I wait for 3 seconds