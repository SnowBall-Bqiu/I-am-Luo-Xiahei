/**
 * Footer模块加载器
 * 用于在所有页面动态加载统一的footer模块
 */

class FooterLoader {
    constructor() {
        this.footerPath = '../components/footer.html';
        this.containerId = 'footer-container';
    }

    /**
     * 加载footer模块
     */
    async loadFooter() {
        try {
            const response = await fetch(this.footerPath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const footerHTML = await response.text();
            
            // 查找footer容器
            let container = document.getElementById(this.containerId);
            if (!container) {
                // 如果没有找到容器，创建一个新的footer元素
                container = document.createElement('div');
                container.id = this.containerId;
                document.body.appendChild(container);
            }
            
            container.innerHTML = footerHTML;
            
            // 确保CSS已加载
            this.ensureFooterCSS();
            
            console.log('Footer模块加载成功');
        } catch (error) {
            console.error('加载footer模块失败:', error);
        }
    }

    /**
     * 确保footer CSS已加载
     */
    ensureFooterCSS() {
        const cssId = 'footer-css';
        if (!document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.href = '../assets/css/footer.css';
            document.head.appendChild(link);
        }
    }

    /**
     * 初始化footer加载器
     */
    static init() {
        const loader = new FooterLoader();
        
        // 如果DOM已加载完成，立即加载footer
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => loader.loadFooter());
        } else {
            loader.loadFooter();
        }
        
        return loader;
    }
}

// 导出供全局使用
window.FooterLoader = FooterLoader;
