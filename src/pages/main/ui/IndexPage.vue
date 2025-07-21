<template>
  <div class="menu">
    <div class="swiper">
        <div class="swiper-wrapper">
            
            <div class="swiper-slide">
                <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
                
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
            </div>
            <div class="swiper-slide">
                <img class="swiper-img" src="/images/menu-item/Jeniffer.jpg">
            </div>
            
        </div>
        <div class="swiper-button-prev"><</div>
        <div class="swiper-button-next">></div>
        <div class="swiper-pagination"></div>
        
      </div>
    <div class="menu-list">
      <div class="menu-label" id="Pizza">Пицца</div>
      <div class="menu-container">
        <MenuItem menuName="Дженнифер" 
        menuDescription="Состав: копченая курица, творожный сыр, кабачки, грибы свежие, помидоры, сыр, соус сырный, соус пикантный, дрожжевое тесто."
        menuWeight="(100 гр: 244 Ккал/1020 кДж)"
        imageSrc="/images/menu-item/Jeniffer.jpg"
        SpicyimageSrc="/images/menu-item/Exclamation Mark.svg" >
            <massWeight  title="Дженнифер"/>
            <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Дженнифер"/>
            </template>
        </MenuItem>

        <MenuItem SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight  title="Арканзас"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Арканзас" />
          </template>
        </MenuItem>

        <MenuItem menuName="Мичиган" menuDescription="Состав: маринованная говядина, грибы свежие, копченая индейка, помидоры,сыр, соус тар-тар, дрожжевое тесто."
        menuWeight="(100 гр: 244 Ккал/1020 кДж)" imageSrc="/images/menu-item/Michigan.png"
        SpicyimageSrc="/images/menu-item/Exclamation Mark.svg" >
            <massWeight  title="Мичиган"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Мичиган"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Пепперони" 
        menuDescription="Состав: колбаса пепперони, огурцы маринованные, сыр, перец халапеньо, томатный соус, дрожжевое тесто." 
        menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Peperoni.jpg"  SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight  title="Пепперони"/>
          <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Пепперони"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
        menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Jorjia.jpg" SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight  title="Джорджия"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Джорджия"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg" SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
                    <massWeight  title="Манхетен"/>
                    <template v-slot:additional-info>
                      <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Манхетен"/>
                    </template>
        </MenuItem>

        <MenuItem menuName="Пепперони" 
        menuDescription="Состав: колбаса пепперони, огурцы маринованные, сыр, перец халапеньо, томатный соус, дрожжевое тесто." 
        menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Peperoni.jpg">
          <massWeight  title="Пепперони"/>
          <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Пепперони"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Jorjia.jpg" SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight  title="Джорджия"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Джорджия"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg">
          <massWeight  title="Манхетен"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Манхетен"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Manhattan.jpg"  SpicyimageSrc="/images/menu-item/Exclamation Mark.svg">
          <massWeight  title="Манхетен"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Манхетен"/>
          </template>
        </MenuItem>

        <MenuItem>
          <massWeight  title="Арканзас"  SpicyimageSrc="/images/menu-item/Exclamation Mark.svg"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Арканзас"/>
          </template>
        </MenuItem>
      </div>

      <div class="menu-label" id="Beri-Peki">Заготовка пиццы «Бери-пеки»</div>
      <div class="menu-container">
        <MenuItem menuName="Мичиган" menuDescription="Состав: маринованная говядина, грибы свежие, копченая индейка, помидоры,сыр, соус тар-тар, дрожжевое тесто."
        menuWeight="(В 100 гр.: 314 ккал/1314 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg" overImage="/images/menu-item/new.svg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
        menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg" overImage="/images/menu-item/hit.svg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Джорджия" menuDescription="Состав: кальмары, помидоры, сыр, оливки, соус бешамель с пастой из морепродуктов, соус унаги, дрожжевое тесто."
        menuWeight="(В 100 гр.: 238 ккал/997 кДж)"  imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Манхетен" menuDescription="Состав: колбаса, грибы свежие, помидоры, маслины, сыр, соус томатный, дрожжевое тесто."
        menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/Beri-peki.jpg">
          <massWeight CustomClass="option-none"  title="Бери-пеки"/>
          <template v-slot:additional-info>
            <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Бери-пеки"/>
          </template>
        </MenuItem>
      </div>


      <div class="menu-label" id="Snacks">Закуски</div>
      <div class="menu-container">
        <MenuItem menuName="Куриные наггетсы" menuDescription="Состав: маринованные в  соевом  соусе кусочки куриного филе в хрустящей панировке, обжаренные во фритюре. Соус на ваш выбор: Кетчуп/ Тар-тар"
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/nuggets.png" overImage="/images/menu-item/new.svg">
            <massWeight CustomClass="option-none"  title="Наггетсы"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Наггетсы"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Сырная тортилья" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
         menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/nuggets.png">
              <massWeight CustomClass="option-none"  title="Тортилья"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Тортилья"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Сухарики к пиву" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано" menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/nuggets.png">
              <massWeight CustomClass="option-none"  title="Сухарики"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сухарики"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Соус Сальса классический" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png" overImage="/images/menu-item/new.svg">
              <massWeight   title="Сальса"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сальса"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Соус Тар-тар" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"  menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png">
              <massWeight   title="Тар-Тар"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Тар-Тар"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Соус сырный" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано" menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png">
            <massWeight title="Сырный"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сырный"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Кетчуп / Майонез / Сметана" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
         menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/sous.png" overImage="/images/menu-item/new.svg">
          <massWeight title="Кетчуп Майонез Сметана"/>
          <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кетчуп Майонез Сметана"/>
          </template>
        </MenuItem>

        <MenuItem menuName="Соус Сальса классический" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано"
         menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/spicy-sous.png" overImage="/images/menu-item/new.svg">
            <massWeight title="Сальса"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сальса"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сухарики к пиву" menuDescription="Состав: запеченная пресная лепешка под сыром, сырный соус и орегано" menuWeight="(В 100 гр.: 304 ккал/1270 кДж)" imageSrc="/images/menu-item/nuggets.png">
              <massWeight CustomClass="option-none"  title="Сухарики"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сухарики"/>
              </template>
        </MenuItem>
      </div>


      <div class="menu-label" id="Mexican">Мексиканские блюда</div>
      <div class="menu-container">
        <MenuItem menuName="Кесадия куриная" menuDescription="Состав: курица, помидоры, перец болгарский, сыр, соус, кетчуп, майонез с зеленью, пресная лепешка"
          menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
              <massWeight   title="Кесадия"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Кесадия грибная" menuDescription="Состав: грибы, сыр, помидоры, маслины, соус Чили, майонез, пресная лепешка."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
                <massWeight   title="Кесадия"/>
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
                </template>
        </MenuItem>

        <MenuItem menuName="Кесадия мясная" menuDescription="Состав: грибы, сыр, помидоры, маслины, соус Чили, майонез, пресная лепешка."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
                <massWeight   title="Кесадия"/>
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
                </template>
        </MenuItem>

        <MenuItem menuName="Цезарь ролл" menuDescription="Состав: тортилья-гриль, курица, маринованная в соевом соусе, помидоры, сыра, лист салата, соус горчичный."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
                <massWeight  CustomClass="option-none"  title="Кесадия-ролл"/>
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
                </template>
        </MenuItem>

        <MenuItem menuName="Кесадия куриная" menuDescription="Состав: курица, помидоры, перец болгарский, сыр, соус, кетчуп, майонез с зеленью, пресная лепешка"
          menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
              <massWeight   title="Кесадия"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Кесадия грибная" menuDescription="Состав: грибы, сыр, помидоры, маслины, соус Чили, майонез, пресная лепешка."
         menuWeight="(В 100 гр.: 238 ккал/997 кДж)" imageSrc="/images/menu-item/Kesadilia.png">
              <massWeight   title="Кесадия"/>
              <template v-slot:additional-info>
                <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Кесадия"/>
              </template>
        </MenuItem>

        <MenuItem menuName="Энчиладос" menuDescription="Состав: курица, перец болгарский, кукуруза, лук жареный, рис, сыр, соус Чили, майонез, преcная лепешка. Соус на ваш выбор: Сальса классический/Сальса фирменный."
         menuWeight="(В 100 гр.: 330 ккал/1382 кДж)" imageSrc="/images/menu-item/enchiladoss.png">
                <massWeight   title="Энчиладос"/>
                <template v-slot:additional-info>
                  <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Энчиладос"/>
                </template>
        </MenuItem>
      </div>

      <div class="menu-label" id="Salat">Салаты</div>
      <div class="menu-container">
        <MenuItem menuName="Лукас" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight  CustomClass="option-none"  title="Лукас"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Лукас"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Цезарь" menuDescription="Состав: курица, помидоры, яйцо перепелиное, сыр пармезан, сухарики, лист салата, пекинская капуста, соус пикантный."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight  CustomClass="option-none"  title="Цезарь"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Цезарь"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сомбреро" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight  CustomClass="option-none"  title="Сомбреро"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сомбреро"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сомбреро" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight  CustomClass="option-none"  title="Сомбреро"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сомбреро"/>
            </template>
        </MenuItem>

        <MenuItem menuName="Сомбреро" menuDescription="Состав: маринованная говядина, огурцы свежие, пекинская капуста, лук красный маринованный, сухарики, орехово-чесночная заправка."
        menuWeight="(В 100 гр.: 275 ккал/1550 кДж)" imageSrc="/images/menu-item/salad.png">
            <massWeight  CustomClass="option-none"  title="Сомбреро"/>
            <template v-slot:additional-info>
              <massWeight CustomInfoClass="option-info-flex"  CustomClass="option-none" ButtonBlockClass="option-none" title="Сомбреро"/>
            </template>
        </MenuItem>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './style.scss';
@import '/node_modules/swiper/swiper-bundle.min.css';
.option-none{
    display: none;
    padding: 0px;
    margin-top: 20px;
}

.option-info-flex{
  display: flex;
}
.swiper{
    width: 350px;
}
.swiper-img{
    width: 350px;
    height: 400px;
    border-radius: 20px;
    margin: 100px auto 30px;
}

.swiper-button-next,
.swiper-button-prev {
  display: none;
}

@media(min-width:780px){
  .swiper{
    width: 750px;
}
  .swiper-img{
    width: 750px;
    height: 400px;
    border-radius: 20px;
    margin: 100px auto 30px;
}

.swiper-button-next,
.swiper-button-prev {
  color:  #333333; /* Цвет стрелок */
  background-color: white;
  border-radius: 30px;
  width: 48px; /* Ширина кнопок */
  height: 48px; /* Высота кнопок */
  z-index: 10; /* Обеспечение правильного наложения */
}
}

@media(min-width:1200px){
.swiper{
    width: 1280px;

}

.swiper-img{
    width: 1280px;
    height: 590px;
    border-radius: 10px;
    margin: 100px auto 30px;
}

.swiper-button-next,
.swiper-button-prev {
  display: flex;

  color:  #333333; /* Цвет стрелок */
  background-color: white;
  border-radius: 30px;
  width: 48px; /* Ширина кнопок */
  height: 48px; /* Высота кнопок */
  z-index: 10; /* Обеспечение правильного наложения */
  font-weight: 700;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #FF991F;
}
}

</style>

<script setup lang="ts">
  import MenuItem from "@entities/menuItem/ui/menuItem.vue";
  import massWeight from '@widgets/massWeighr/ui/massWeight.vue';
  import { ref, onMounted } from 'vue';
  import { Navigation, Pagination } from 'swiper/modules'
  import '/node_modules/swiper/swiper-bundle.min.js';
    onMounted(() => {
      const Swiper = (window as any).Swiper;

      if (Swiper) {
        const swiper = new Swiper('.swiper', {
          modules: [Pagination, Navigation],
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            
          },
          breakpoints: {
            1244: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          },
        });
      } else {
        console.error('Swiper not loaded');
      }
    });
  

</script>
