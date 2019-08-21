import Layout from "@/Layout";

export default {
  path: "/FZSC",
  name: "FZSC",
  meta: {
    navTitle: "辅助审查",
    icon: "icon-fuzhushencha",
    weight: 1, // 权重
    disabled: true
  },
  redirect: {
    name: "DataPrepareContainer"
  },
  component: Layout,
  children: [
    {
      path: "DataPrepareContainer",
      name: "DataPrepareContainer",
      meta: {
        navTitle: "数据准备",
        icon: "icon-shujuchanpinliulan"
      },
      component: () =>
        import(/* webpackChunkName: "DataPrepareContainer" */ "FZSC/DataPrepareContainer"),
      redirect: {
        name: "FZSCHome"
      },
      children: [
        {
          path: "FZSCHome",
          name: "FZSCHome",
          component: () =>
            import(/* webpackChunkName: "FZSCHome" */ "FZSC/pages/DataPreparation/FZSCHome")
        },
        {
          path: "DataPreparationCreate",
          name: "DataPreparationCreate",
          component: () =>
            import(/* webpackChunkName: "DataPreparationCreate" */ "FZSC/pages/DataPreparation/DataPreparationCreate")
        },
        {
          path: "ReportBasicInformation",
          name: "ReportBasicInformation",
          component: () =>
            import(/* webpackChunkName: "ReportBasicInformation" */ "FZSC/pages/DataPreparation/ReportBasicInformation")
        }
      ]
    },
    {
      path: "ResultsReviewContainer",
      name: "ResultsReviewContainer",
      meta: {
        navTitle: "成果审查",
        icon: "icon-ziranziyuanfenxipingjia"
      },
      redirect: {
        name: "ResultsReview"
      },
      component: () =>
        import(/* webpackChunkName: "ResultsReviewContainer" */ "FZSC/ResultsReviewContainer"),
      children: [
        {
          path: "ResultsReview",
          name: "ResultsReview",
          component: () =>
            import(/* webpackChunkName: "ResultsReview" */ "FZSC/pages/ResultsReview/ResultsReview")
        },
        {
          path: "ResultsPlanningImport",
          name: "ResultsPlanningImport",
          component: () =>
            import(/* webpackChunkName: "ResultsPlanningImport" */ "FZSC/pages/ResultsReview/ResultsPlanningImport")
        },
        {
          path: "ResultsReviewCreate",
          name: "ResultsReviewCreate",
          component: () =>
            import(/* webpackChunkName: "ResultsReviewCreate" */ "FZSC/pages/ResultsReview/ResultsReviewCreate")
        },
        {
          path: "ResultsReviewInformation",
          name: "ResultsReviewInformation",
          component: () =>
            import(/* webpackChunkName: "ResultsReviewInformation" */ "FZSC/pages/ResultsReview/ResultsReviewInformation")
        },
        {
          path: "ResultsSuccess",
          name: "ResultsSuccess",
          component: () =>
            import(/* webpackChunkName: "ResultsSuccess" */ "FZSC/pages/ResultsReview/ResultsSuccess")
        },
        {
          path: "ResultsUpload",
          name: "ResultsUpload",
          component: () =>
            import(/* webpackChunkName: "ResultsUpload" */ "FZSC/pages/ResultsReview/ResultsUpload")
        }
      ]
    },
    {
      path: "ResultsManageContainer",
      name: "ResultsManageContainer",
      meta: {
        navTitle: "成果管理",
        icon: "icon-fuzhufenxigongju-"
      },
      redirect: {
        name: "ResultsManagement"
      },
      component: () =>
        import(/* webpackChunkName: "ResultsManageContainer" */ "FZSC/ResultsManageContainer"),
      children: [
        {
          path: "ResultsManagement",
          name: "ResultsManagement",
          component: () =>
            import(/* webpackChunkName: "ResultsManagement" */ "FZSC/pages/ResultsManagement/ResultsManagement")
        }
      ]
    }
  ]
};
