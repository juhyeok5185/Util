package com.ein.crm.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.net.URLEncoder;

@Component
public class LoginFailHandler extends SimpleUrlAuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException, ServletException {
        HttpSession session = request.getSession();
        String msg = e.getMessage();
        if (msg.equals("자격 증명에 실패하였습니다.")) {
            msg = "아이디와 비밀번호를 확인해주세요";
        }
        session.setAttribute("msg", msg);
        response.sendRedirect("/api/crm/login?msg=" + URLEncoder.encode(msg, "UTF-8"));
    }
}
