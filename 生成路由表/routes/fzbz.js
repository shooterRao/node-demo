import Layout from "@/Layout";

export default {
  path: "/FZBZ",
  name: "FZBZ",
  meta: {
    navTitle: "辅助编制",
    icon: "icon-fuzhubianzhi",
    weight: 1, // 权重
    access: [] // 未来用于权限过滤
  },
  redirect: "/FZBZ/BaseDateHandle",
  component: Layout,
  children: [
    {
      path: "BaseDateHandle",
      name: "BaseDateHandle",
      meta: {
        navTitle: "基期数据处理",
        icon: "icon-shujuchanpinliulan",
        showDropdown: true
      },
      redirect: {
        name: "DataViews"
      },
      component: () =>
        import(/* webpackChunkName: "BaseDateHandle" */ "FZBZ/BaseDateHandle"),
      children: [
        {
          path: "DataViews",
          name: "DataViews",
          meta: {
            navTitle: "数据浏览"
          },
          component: () =>
            import(/* webpackChunkName: "ToolMap" */ "FZBZ/BaseDateHandle/DataViews")
        },
        {
          path: "ToolMap",
          name: "ToolMap",
          meta: {
            navTitle: "工具集"
          },
          component: () =>
            import(/* webpackChunkName: "ToolMap" */ "FZBZ/BaseDateHandle/ToolMap")
        }
      ]
    },
    {
      path: "NatureAnalysisEvaluationV2",
      name: "NatureAnalysisEvaluationV2",
      meta: {
        navTitle: "自然分析评价",
        icon: "icon-ziranziyuanfenxipingjia"
      },
      component: () =>
        import(/* webpackChunkName: "NatureAnalysisEvaluation" */ "FZBZ/NatureAnalysisEvaluationV2"),
      redirect: {
        name: "EvaluationHome"
      },
      children: [
        {
          path: "EvaluationHome",
          name: "EvaluationHome",
          component: () =>
            import(/* webpackChunkName: "EvaluationPager" */ "FZBZ/NatureAnalysisEvaluationV2/EvaluationHome")
        }
      ]
    },
    {
      path: "NatureAnalysisEvaluation",
      name: "NatureAnalysisEvaluation",
      meta: {
        navTitle: "自然资源分析评价",
        icon: "icon-ziranziyuanfenxipingjia"
      },
      component: () =>
        import(/* webpackChunkName: "NatureAnalysisEvaluation" */ "FZBZ/NatureAnalysisEvaluation"),
      redirect: {
        name: "EvaluationBrower"
      },
      children: [
        {
          path: "EvaluationBrower",
          name: "EvaluationBrower",
          component: () =>
            import(/* webpackChunkName: "EvaluationBrower" */ "FZBZ/NatureAnalysisEvaluation/EvaluationBrower"),
          children: [
            {
              path: "RightAllView",
              name: "RightAllView",
              component: () =>
                import(/* webpackChunkName: "RightAllView" */ "FZBZ/AnalysisEvaluation/RightAllView")
            },
            // 大类路由
            {
              path: "LargeClassDes",
              name: "LargeClassDes",
              component: () =>
                import(/* webpackChunkName: "LargeClassDes" */ "FZBZ/AnalysisEvaluation/LargeClassDes")
            },
            // 子类路由
            {
              path: "SubClassDes",
              name: "SubClassDes",
              component: () =>
                import(/* webpackChunkName: "SubClassDes" */ "FZBZ/AnalysisEvaluation/SubClassDes")
            },
            // 产业布局
            {
              path: "IndustryLayout",
              name: "IndustryLayout",
              component: () =>
                import(/* webpackChunkName: "IndustryLayout" */ "FZBZ/AnalysisEvaluation/IndustryLayout")
            }
          ]
        },
        {
          path: "EvaluationPager",
          name: "EvaluationPager",
          component: () =>
            import(/* webpackChunkName: "EvaluationPager" */ "FZBZ/NatureAnalysisEvaluation/EvaluationPager")
        }
      ]
    },
    {
      path: "DoubleEvaluation",
      name: "DoubleEvaluation",
      meta: {
        navTitle: "双评价",
        icon: "icon-fuzhufenxigongju-"
      },
      component: () =>
        import(/* webpackChunkName: "DoubleEvaluation" */ "FZBZ/DoubleEvaluation")
    }
  ]
};
