<script>
export default {
  setup() {
    const menus = [
      {
        categoryName: "Api Yönetimi",
        lists: [
          {
            title: "Apiler",
            icon: "fas fa-colums",
            submenus: [
              {
                title: "Yeni Uygulama Oluştur",
                to: "",
              },
              {
                title: "Api Uygulamalarını Yönet",
                to: "",
              },
            ],
          },
        ],
      },
      {
        categoryName: "Hesap",
        lists: [
          {
            title: "Hesap Ayarları",
            icon: "fa fa-user",
            to: "",
          },
          {
            title: "Hesap Aktiviteleri",
            icon: "fa fa-person",
            to: "",
          },
        ],
      },
    ];
    return {
      menus,
    };
  },
};
</script>

<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Ana Sayfa</div>
          <a class="nav-link" href="index.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Ana Sayfa
          </a>
          <div v-for="menu in menus" :key="menu.categoryName">
            <div class="sb-sidenav-menu-heading">{{ menu.categoryName }}</div>
            <div v-for="list in menu.lists" :key="list.title">
              <div v-if="list.submenus">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#${list.title}`"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                >
                  <div class="sb-nav-link-icon">
                    <i class="fas fa-columns"></i>
                  </div>
                  {{ list.title }}
                  <div class="sb-sidenav-collapse-arrow">
                    <i class="fas fa-angle-down"></i>
                  </div>
                </a>
                <div
                  class="collapse"
                  :id="list.title"
                  aria-labelledby="headingOne"
                  data-bs-parent="#sidenavAccordion"
                >
                  <nav class="sb-sidenav-menu-nested nav">
                    <a
                      v-for="submenu in list.submenus"
                      :key="submenu.title"
                      class="nav-link"
                      href="layout-static.html"
                      >{{submenu.title}}</a
                    >
                  </nav>
                </div>
              </div>
              <a v-else class="nav-link" href="charts.html">
                <div class="sb-nav-link-icon">
                  <i class="list.icon"></i>
                </div>
                {{ list.title }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
</style>