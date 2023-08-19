package com.ein.crm.security;

import com.ein.crm.domain.member.Member;
import com.ein.crm.domain.member.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.net.URLEncoder;

@Component
@RequiredArgsConstructor
public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final MemberRepository repository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        Member member = repository.findByUsername(authentication.getName());
        HttpSession session = request.getSession();

        if (!member.getUsage() || !member.getApproval()) {
            String msg = "관리자에게 문의하세요";
            session.setAttribute("msg", msg);
            response.sendRedirect("/api/crm/login?msg=" + URLEncoder.encode(msg, "UTF-8"));
            return;
        }
        session.setAttribute("memberId", member.getId());
        session.setAttribute("username", member.getUsername());
        session.setAttribute("role", member.getRole());
        response.sendRedirect("main");
    }
}






