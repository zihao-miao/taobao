package com.control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.dao.BaseDAO;

public class ShowGouwucheServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session=request.getSession();
		String userid=(String)session.getAttribute("userid");
	if(userid!=null && !userid.equals("")){
		request.setCharacterEncoding("utf-8");	
		BaseDAO dao=new BaseDAO();
		Map<String,Object> data=dao.getAll("a.*,b.*,c.*","goods b,gouwuche a,store c","and a.userid="+userid+" and a.goodsid=b.goodsid and b.storeid=c.storeid","a.gouwucheid desc");
		List<Map<String,String>> records=(List<Map<String,String>>)data.get("records");
		session.setAttribute("gouwuche_goods", records);
	}
	}
}
