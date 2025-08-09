const expertCourseStatus = document.querySelectorAll(".expert-course-status");

expertCourseStatus.forEach((e)=>{
    if(e.innerText.includes("반려")){
        e.style.textDecoration = "underline";
        e.style.cursor = "pointer";
        e.addEventListener('click', ()=>{
            openModal("courseRejectionReason");
        });
    }
});