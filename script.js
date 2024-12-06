// سجل الصفحات التي تم زيارتها في مصفوفة
let pageHistory = [];

// تسجيل الدخول
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "fathalla" && password === "123") {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("customer-data-page").classList.remove("hidden");  // الانتقال إلى صفحة بيانات العميل
        pageHistory.push(document.getElementById("login-page"));
    } else {
        document.getElementById("login-error").style.display = "block";
    }
});

// الانتقال بين الصفحات
const branches = document.querySelectorAll("#branches-list li");
branches.forEach(branch => {
    branch.addEventListener("click", function() {
        document.getElementById("branches-page").classList.add("hidden");
        document.getElementById("departments-page").classList.remove("hidden");
        pageHistory.push(document.getElementById("branches-page"));
    });
});

const departments = document.querySelectorAll("#departments-list li");
departments.forEach(department => {
    department.addEventListener("click", function() {
        document.getElementById("departments-page").classList.add("hidden");
        document.getElementById("products-page").classList.remove("hidden");
        pageHistory.push(document.getElementById("departments-page"));
    });
});

// الانتقال إلى صفحة اختيار الفرع بعد إتمام إدخال بيانات العميل
document.getElementById("customer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("customer-data-page").classList.add("hidden");
    document.getElementById("branches-page").classList.remove("hidden");
    pageHistory.push(document.getElementById("customer-data-page"));
});

// زر الرجوع
function goBack() {
    if (pageHistory.length > 0) {
        let lastPage = pageHistory.pop();
        document.querySelector(".page:not(.hidden)").classList.add("hidden");
        lastPage.classList.remove("hidden");
    }
}

// بحث الفرع
function searchBranches() {
    const query = document.getElementById("search-branch").value.toLowerCase();
    const branchesList = document.querySelectorAll("#branches-list li");
    branchesList.forEach(branch => {
        const text = branch.textContent.toLowerCase();
        if (text.includes(query)) {
            branch.style.display = "block";
        } else {
            branch.style.display = "none";
        }
    });
}

// بحث القسم
function searchDepartments() {
    const query = document.getElementById("search-department").value.toLowerCase();
    const departmentsList = document.querySelectorAll("#departments-list li");
    departmentsList.forEach(department => {
        const text = department.textContent.toLowerCase();
        if (text.includes(query)) {
            department.style.display = "block";
        } else {
            department.style.display = "none";
        }
    });
}

// بحث المنتجات
function searchProducts() {
    const query = document.getElementById("search-product").value.toLowerCase();
    const productsList = document.querySelectorAll("#products-list li");
    productsList.forEach(product => {
        const text = product.textContent.toLowerCase();
        if (text.includes(query)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

// دالة لإظهار الصفحة المطلوبة
function showPage(pageId) {
    // إخفاء جميع الصفحات
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.add("hidden"));
    
    // إظهار الصفحة المحددة
    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {
        pageToShow.classList.remove("hidden");
    }
}
